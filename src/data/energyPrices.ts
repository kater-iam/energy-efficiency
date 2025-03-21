// エネルギー価格データをTypeScriptとして直接定義
// このファイルは scripts/csv-to-ts.js によって自動生成されました
// 生成日時: 2025-03-06T00:08:31.004Z

export interface EnergyData {
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

export interface EnergyDataResponse {
  years: EnergyData[];
}

export const energyPricesData: EnergyDataResponse = {
  "years": [
    {
      "year": "2019",
      "electricity": {
        "price": 25.5,
        "unit": "円/kWh",
        "note": "基本料金と従量課金の全国平均"
      },
      "gas": {
        "price": 145.2,
        "unit": "円/m³",
        "note": "都市ガスの全国平均単価"
      },
      "oil": {
        "price": 92.1,
        "unit": "円/L",
        "note": "灯油の全国平均価格"
      },
      "ac_efficiency": {
        "value": 4.2,
        "note": "一般家庭用エアコンの平均APF値"
      },
      "notes": "消費税8%から10%への増税前の価格"
    },
    {
      "year": "2020",
      "electricity": {
        "price": 26.8,
        "unit": "円/kWh",
        "note": "基本料金と従量課金の全国平均"
      },
      "gas": {
        "price": 148.7,
        "unit": "円/m³",
        "note": "都市ガスの全国平均単価"
      },
      "oil": {
        "price": 85.3,
        "unit": "円/L",
        "note": "灯油の全国平均価格（コロナ禍による価格低下）"
      },
      "ac_efficiency": {
        "value": 4.5,
        "note": "一般家庭用エアコンの平均APF値"
      },
      "notes": "コロナウイルス流行による需要変動の影響あり"
    },
    {
      "year": "2021",
      "electricity": {
        "price": 28.1,
        "unit": "円/kWh",
        "note": "基本料金と従量課金の全国平均"
      },
      "gas": {
        "price": 152.5,
        "unit": "円/m³",
        "note": "都市ガスの全国平均単価"
      },
      "oil": {
        "price": 91.8,
        "unit": "円/L",
        "note": "灯油の全国平均価格"
      },
      "ac_efficiency": {
        "value": 4.7,
        "note": "一般家庭用エアコンの平均APF値"
      },
      "notes": "エネルギー価格の上昇傾向が見られた年"
    },
    {
      "year": "2022",
      "electricity": {
        "price": 30.5,
        "unit": "円/kWh",
        "note": "基本料金と従量課金の全国平均（燃料費調整額増加）"
      },
      "gas": {
        "price": 165.8,
        "unit": "円/m³",
        "note": "都市ガスの全国平均単価（国際価格高騰の影響）"
      },
      "oil": {
        "price": 105.7,
        "unit": "円/L",
        "note": "灯油の全国平均価格（原油高の影響）"
      },
      "ac_efficiency": {
        "value": 5,
        "note": "一般家庭用エアコンの平均APF値"
      },
      "notes": "ウクライナ情勢等による世界的な資源価格高騰の影響が大きい年"
    },
    {
      "year": "2023",
      "electricity": {
        "price": 32.8,
        "unit": "円/kWh",
        "note": "基本料金と従量課金の全国平均（電力自由化の影響も）"
      },
      "gas": {
        "price": 170.2,
        "unit": "円/m³",
        "note": "都市ガスの全国平均単価"
      },
      "oil": {
        "price": 110.3,
        "unit": "円/L",
        "note": "灯油の全国平均価格"
      },
      "ac_efficiency": {
        "value": 5.2,
        "note": "一般家庭用エアコンの平均APF値"
      },
      "notes": "継続的な円安とエネルギー価格の高値安定"
    },
    {
      "year": "2024",
      "electricity": {
        "price": 33.5,
        "unit": "円/kWh",
        "note": "基本料金と従量課金の全国平均"
      },
      "gas": {
        "price": 172,
        "unit": "円/m³",
        "note": "都市ガスの全国平均単価"
      },
      "oil": {
        "price": 108.5,
        "unit": "円/L",
        "note": "灯油の全国平均価格"
      },
      "ac_efficiency": {
        "value": 5.5,
        "note": "一般家庭用エアコンの平均APF値（省エネ性能向上）"
      },
      "notes": "省エネ家電への買い替え促進政策の影響あり "
    }
  ]
};