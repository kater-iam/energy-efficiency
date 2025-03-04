import { useState, ChangeEvent, useEffect } from 'react'
import './App.css'

// エネルギーデータの型定義
interface EnergyData {
  year: string;
  electricity: {
    price: number;
    unit: string;
    note: string;
  };
  gas: {
    price: number;
    unit: string;
    note: string;
  };
  oil: {
    price: number;
    unit: string;
    note: string;
  };
  ac_efficiency: {
    value: number;
    note: string;
  };
  notes: string;
}

interface EnergyDataResponse {
  years: EnergyData[];
}

function App() {
  // 入力値の状態管理
  const [electricityPrice, setElectricityPrice] = useState<string>('30');
  const [gasPrice, setGasPrice] = useState<string>('150');
  const [oilPrice, setOilPrice] = useState<string>('100');
  const [acEfficiency, setAcEfficiency] = useState<string>('3.5');
  
  // データソース管理
  const [energyData, setEnergyData] = useState<EnergyData[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedYearData, setSelectedYearData] = useState<EnergyData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 計算結果の状態管理
  const [results, setResults] = useState({
    acHeating: 0,
    electricHeating: 0,
    gasHeating: 0,
    oilHeating: 0
  });

  // データの読み込み
  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        const response = await fetch('/energy-prices.json');
        if (!response.ok) {
          throw new Error('データの読み込みに失敗しました');
        }
        const data: EnergyDataResponse = await response.json();
        setEnergyData(data.years);
        
        // 最新の年をデフォルトで選択
        if (data.years.length > 0) {
          const latestYear = data.years[data.years.length - 1].year;
          setSelectedYear(latestYear);
        }
        
        setIsLoading(false);
      } catch (err) {
        setError('データの読み込み中にエラーが発生しました');
        setIsLoading(false);
        console.error('データ読み込みエラー:', err);
      }
    };

    fetchEnergyData();
  }, []);

  // 選択された年のデータが変更されたときの処理
  useEffect(() => {
    if (selectedYear && energyData.length > 0) {
      const yearData = energyData.find(data => data.year === selectedYear) || null;
      setSelectedYearData(yearData);
      
      if (yearData) {
        // 選択された年のデータで入力フィールドを更新
        setElectricityPrice(yearData.electricity.price.toString());
        setGasPrice(yearData.gas.price.toString());
        setOilPrice(yearData.oil.price.toString());
        setAcEfficiency(yearData.ac_efficiency.value.toString());
      }
    }
  }, [selectedYear, energyData]);

  // 年の選択が変更されたときのハンドラ
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  // 入力値のハンドラ
  const handleElectricityPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setElectricityPrice(e.target.value);
  };

  const handleGasPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGasPrice(e.target.value);
  };

  const handleOilPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOilPrice(e.target.value);
  };

  const handleAcEfficiencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAcEfficiency(e.target.value);
  };

  // 計算ロジック
  useEffect(() => {
    calculateEfficiency();
  }, [electricityPrice, gasPrice, oilPrice, acEfficiency]);

  const calculateEfficiency = () => {
    // 入力値をNumber型に変換
    const elecPrice = Number(electricityPrice);
    const gPrice = Number(gasPrice);
    const oPrice = Number(oilPrice);
    const acEff = Number(acEfficiency);

    // エラーチェック
    if (isNaN(elecPrice) || isNaN(gPrice) || isNaN(oPrice) || isNaN(acEff) || acEff <= 0) {
      return;
    }

    // 電気ヒーターの効率は100%として計算
    const electricHeatingEfficiency = elecPrice;
    
    // エアコンの効率 = 電気代 / COP(またはAPF)
    const acHeatingEfficiency = elecPrice / acEff;
    
    // ガスの熱量換算 (都市ガス: 約45MJ/m³、1kWh = 3.6MJ)
    // 1m³のガスは約12.5kWhに相当
    const gasHeatingEfficiency = gPrice / 12.5;
    
    // 灯油の熱量換算 (灯油: 約36.7MJ/L、1kWh = 3.6MJ)
    // 1Lの灯油は約10.2kWhに相当
    const oilHeatingEfficiency = oPrice / 10.2;
    
    setResults({
      acHeating: acHeatingEfficiency,
      electricHeating: electricHeatingEfficiency,
      gasHeating: gasHeatingEfficiency,
      oilHeating: oilHeatingEfficiency
    });
  };

  // 効率の良い順にソートして表示するための関数
  const getSortedEfficiencyList = () => {
    const list = [
      { name: 'エアコン', value: results.acHeating },
      { name: '電気ヒーター', value: results.electricHeating },
      { name: 'ガスヒーター', value: results.gasHeating },
      { name: '灯油ヒーター', value: results.oilHeating }
    ];
    
    return list.sort((a, b) => a.value - b.value);
  };

  // ローディング表示
  if (isLoading) {
    return <div className="loading-container">データを読み込み中...</div>;
  }

  // エラー表示
  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="energy-efficiency-calculator">
      <h1>エネルギー効率計算ツール</h1>
      <p>各エネルギー源の価格と効率を入力して、最も効率の良い暖房方法を比較します。</p>
      
      <div className="year-selector">
        <label htmlFor="year-select">年度を選択:</label>
        <select 
          id="year-select" 
          value={selectedYear} 
          onChange={handleYearChange}
        >
          {energyData.map(data => (
            <option key={data.year} value={data.year}>{data.year}年</option>
          ))}
        </select>
        
        {selectedYearData && (
          <div className="year-notes">
            <span className="year-notes-label">備考:</span> {selectedYearData.notes}
          </div>
        )}
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="electricity">電気代単価 (円/kWh):</label>
          <input 
            id="electricity" 
            type="number" 
            value={electricityPrice}
            onChange={handleElectricityPriceChange}
            min="0"
            step="0.1"
          />
          {selectedYearData && (
            <div className="data-note">{selectedYearData.electricity.note}</div>
          )}
        </div>
        
        <div className="input-group">
          <label htmlFor="gas">ガス代単価 (円/m³):</label>
          <input 
            id="gas" 
            type="number" 
            value={gasPrice}
            onChange={handleGasPriceChange}
            min="0"
            step="0.1"
          />
          {selectedYearData && (
            <div className="data-note">{selectedYearData.gas.note}</div>
          )}
        </div>
        
        <div className="input-group">
          <label htmlFor="oil">灯油代単価 (円/L):</label>
          <input 
            id="oil" 
            type="number" 
            value={oilPrice}
            onChange={handleOilPriceChange}
            min="0"
            step="0.1"
          />
          {selectedYearData && (
            <div className="data-note">{selectedYearData.oil.note}</div>
          )}
        </div>
        
        <div className="input-group">
          <label htmlFor="ac-efficiency">エアコン効率 (COP/APF):</label>
          <input 
            id="ac-efficiency" 
            type="number" 
            value={acEfficiency}
            onChange={handleAcEfficiencyChange}
            min="0.1"
            step="0.1"
          />
          {selectedYearData && (
            <div className="data-note">{selectedYearData.ac_efficiency.note}</div>
          )}
        </div>
      </div>
      
      <div className="results-section">
        <h2>計算結果 (円/kWh)</h2>
        <div className="results-table">
          <div className="result-row">
            <span className="result-label">エアコン:</span>
            <span className="result-value">{results.acHeating.toFixed(2)}</span>
          </div>
          <div className="result-row">
            <span className="result-label">電気ヒーター:</span>
            <span className="result-value">{results.electricHeating.toFixed(2)}</span>
          </div>
          <div className="result-row">
            <span className="result-label">ガスヒーター:</span>
            <span className="result-value">{results.gasHeating.toFixed(2)}</span>
          </div>
          <div className="result-row">
            <span className="result-label">灯油ヒーター:</span>
            <span className="result-value">{results.oilHeating.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="efficiency-ranking">
          <h3>効率ランキング（値段が安い順）</h3>
          <ol>
            {getSortedEfficiencyList().map((item, index) => (
              <li key={index}>
                {item.name}: {item.value.toFixed(2)} 円/kWh
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App
