import { useState } from 'react';
import '../App.css';
import { historicalEnergyPricesData } from '../data/historicalEnergyPrices';

interface ChartProps {
  startYear?: number;
  endYear?: number;
}

export default function HistoricalPriceChart({ 
  startYear = 1950, 
  endYear = new Date().getFullYear() 
}: ChartProps) {
  const [selectedEnergy, setSelectedEnergy] = useState<'electricity' | 'cityGas' | 'lpg' | 'oil'>('electricity');
  
  // フィルタリングされたデータ
  const filteredData = historicalEnergyPricesData.years.filter(
    data => parseInt(data.year) >= startYear && parseInt(data.year) <= endYear
  );

  // グラフの最大値を計算（選択されているエネルギーに基づく）
  const maxPrice = Math.max(
    ...filteredData.map(data => {
      if (selectedEnergy === 'lpg' && data.lpg.price === null) {
        return 0;
      }
      // nullの可能性があるのはlpgのみなので、他は安全にnumberとして扱える
      return selectedEnergy === 'lpg' ? (data.lpg.price || 0) : data[selectedEnergy].price;
    })
  );
  
  // スケーリング係数（グラフの高さに合わせる）
  const scale = maxPrice > 0 ? 200 / maxPrice : 1;

  // エネルギータイプに基づく色の設定
  const getBarColor = () => {
    switch(selectedEnergy) {
      case 'electricity': return '#4caf50'; // 電気: 緑
      case 'cityGas': return '#2196f3';     // 都市ガス: 青
      case 'lpg': return '#9c27b0';         // プロパンガス: 紫
      case 'oil': return '#ff9800';         // 灯油: オレンジ
      default: return '#4caf50';            // デフォルト: 緑
    }
  };

  return (
    <div className="historical-chart-container">
      <h3>歴史的エネルギー価格推移 ({startYear}年～{endYear}年)</h3>
      
      <div className="energy-selector">
        <label>
          <input
            type="radio"
            value="electricity"
            checked={selectedEnergy === 'electricity'}
            onChange={() => setSelectedEnergy('electricity')}
          />
          電気代
        </label>
        <label>
          <input
            type="radio"
            value="cityGas"
            checked={selectedEnergy === 'cityGas'}
            onChange={() => setSelectedEnergy('cityGas')}
          />
          都市ガス
        </label>
        <label>
          <input
            type="radio"
            value="lpg"
            checked={selectedEnergy === 'lpg'}
            onChange={() => setSelectedEnergy('lpg')}
          />
          プロパンガス
        </label>
        <label>
          <input
            type="radio"
            value="oil"
            checked={selectedEnergy === 'oil'}
            onChange={() => setSelectedEnergy('oil')}
          />
          灯油
        </label>
      </div>
      
      <div className="chart-container">
        <div className="price-axis">
          <div className="price-label">{Math.round(maxPrice)}</div>
          <div className="price-label">{Math.round(maxPrice/2)}</div>
          <div className="price-label">0</div>
        </div>
        
        <div className="chart-area">
          {filteredData.map((data, index) => {
            // データの取得と型安全性の確保
            let price = 0;
            let unit = '';
            
            if (selectedEnergy === 'lpg') {
              price = data.lpg.price !== null ? data.lpg.price : 0;
              unit = data.lpg.unit;
            } else {
              price = data[selectedEnergy].price;
              unit = data[selectedEnergy].unit;
            }
            
            const barHeight = price * scale;
            const hasValue = !(selectedEnergy === 'lpg' && data.lpg.price === null);
            
            return (
              <div key={data.year} className="bar-container">
                <div 
                  className={`bar ${hasValue ? '' : 'no-data'}`}
                  style={{ 
                    height: `${barHeight}px`,
                    backgroundColor: hasValue ? getBarColor() : 'transparent'
                  }}
                  title={`${data.year}年: ${hasValue ? price : 'データなし'} ${hasValue ? unit : ''}`}
                />
                {index % 10 === 0 && <div className="year-label">{data.year}</div>}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="chart-note">
        <p>単位: {
          selectedEnergy === 'lpg' 
            ? filteredData[0]?.lpg.unit 
            : filteredData[0]?.[selectedEnergy].unit
        }</p>
        <p>データソース: エネルギー統計資料</p>
        {selectedEnergy === 'lpg' && (
          <p>※プロパンガスは1950年代初期のデータが欠損しています</p>
        )}
      </div>
    </div>
  );
} 