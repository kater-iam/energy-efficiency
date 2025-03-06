// 歴史的エネルギー価格データをTypeScriptとして直接定義
// このファイルは scripts/prices-converter.js によって自動生成されました
// 生成日時: 2025-03-06T02:10:58.074Z

export interface HistoricalEnergyData {
  year: string;
  electricity: {
    price: number;
    unit: string;
  };
  cityGas: {
    price: number;
    unit: string;
  };
  lpg: {
    price: number | null;
    unit: string;
  };
  oil: {
    price: number;
    unit: string;
  };
  ac_efficiency: {
    value: number | null;
  };
  notes: string;
}

export interface HistoricalEnergyDataResponse {
  years: HistoricalEnergyData[];
}

export const historicalEnergyPricesData: HistoricalEnergyDataResponse = {
  "years": [
    {
      "year": "1950",
      "electricity": {
        "price": 5,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 5,
        "unit": "円/m³"
      },
      "lpg": {
        "price": null,
        "unit": "円/m³"
      },
      "oil": {
        "price": 10,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": "戦後復興期、家庭用LPG利用ほぼ無し"
    },
    {
      "year": "1951",
      "electricity": {
        "price": 7.6,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 6,
        "unit": "円/m³"
      },
      "lpg": {
        "price": null,
        "unit": "円/m³"
      },
      "oil": {
        "price": 10.5,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": "電力9社体制発足&#8203;:contentReference[oaicite:0]{index=0}、家庭用LPG利用ほぼ無し"
    },
    {
      "year": "1952",
      "electricity": {
        "price": 9.69,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 7,
        "unit": "円/m³"
      },
      "lpg": {
        "price": null,
        "unit": "円/m³"
      },
      "oil": {
        "price": 10.9,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": "家庭用LPG利用ほぼ無し"
    },
    {
      "year": "1953",
      "electricity": {
        "price": 10.07,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 8,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 50,
        "unit": "円/m³"
      },
      "oil": {
        "price": 11.4,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1954",
      "electricity": {
        "price": 10.25,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 9,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 52.9,
        "unit": "円/m³"
      },
      "oil": {
        "price": 11.8,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1955",
      "electricity": {
        "price": 10.99,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 10,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 55.7,
        "unit": "円/m³"
      },
      "oil": {
        "price": 12.3,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1956",
      "electricity": {
        "price": 11.03,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 11,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 58.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 12.7,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1957",
      "electricity": {
        "price": 11.33,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 12,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 61.4,
        "unit": "円/m³"
      },
      "oil": {
        "price": 13.2,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1958",
      "electricity": {
        "price": 11.49,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 13,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 64.3,
        "unit": "円/m³"
      },
      "oil": {
        "price": 13.6,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1959",
      "electricity": {
        "price": 11.56,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 14,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 67.1,
        "unit": "円/m³"
      },
      "oil": {
        "price": 14.1,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": null
      },
      "notes": " "
    },
    {
      "year": "1960",
      "electricity": {
        "price": 11.6,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 15,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 70,
        "unit": "円/m³"
      },
      "oil": {
        "price": 14.5,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1961",
      "electricity": {
        "price": 11.85,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 16.5,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 73,
        "unit": "円/m³"
      },
      "oil": {
        "price": 15,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1962",
      "electricity": {
        "price": 11.95,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 18,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 76,
        "unit": "円/m³"
      },
      "oil": {
        "price": 15.5,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1963",
      "electricity": {
        "price": 12.05,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 19.5,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 79,
        "unit": "円/m³"
      },
      "oil": {
        "price": 15.9,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1964",
      "electricity": {
        "price": 12.06,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 21,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 82,
        "unit": "円/m³"
      },
      "oil": {
        "price": 16.4,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1965",
      "electricity": {
        "price": 12.09,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 22.5,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 85,
        "unit": "円/m³"
      },
      "oil": {
        "price": 16.8,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1966",
      "electricity": {
        "price": 12.08,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 24,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 88,
        "unit": "円/m³"
      },
      "oil": {
        "price": 17.3,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "料金体系見直し、エアコン普及初期"
    },
    {
      "year": "1967",
      "electricity": {
        "price": 10.03,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 25.5,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 91,
        "unit": "円/m³"
      },
      "oil": {
        "price": 17.7,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "一時的値下げ&#8203;:contentReference[oaicite:1]{index=1}、エアコン普及初期"
    },
    {
      "year": "1968",
      "electricity": {
        "price": 12,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 27,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 94,
        "unit": "円/m³"
      },
      "oil": {
        "price": 18.2,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1969",
      "electricity": {
        "price": 11.91,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 28.5,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 97,
        "unit": "円/m³"
      },
      "oil": {
        "price": 18.6,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2
      },
      "notes": "エアコン普及初期"
    },
    {
      "year": "1970",
      "electricity": {
        "price": 11.85,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 30,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 100,
        "unit": "円/m³"
      },
      "oil": {
        "price": 19.1,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1971",
      "electricity": {
        "price": 11.8,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 40,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 110,
        "unit": "円/m³"
      },
      "oil": {
        "price": 19.5,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1972",
      "electricity": {
        "price": 11.76,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 50,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 120,
        "unit": "円/m³"
      },
      "oil": {
        "price": 20,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1973",
      "electricity": {
        "price": 11.82,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 50,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 120,
        "unit": "円/m³"
      },
      "oil": {
        "price": 20,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1974",
      "electricity": {
        "price": 14.89,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 100,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 240,
        "unit": "円/m³"
      },
      "oil": {
        "price": 40,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": "第一次オイルショック&#8203;:contentReference[oaicite:2]{index=2}"
    },
    {
      "year": "1975",
      "electricity": {
        "price": 15.65,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 96,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 230,
        "unit": "円/m³"
      },
      "oil": {
        "price": 50,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1976",
      "electricity": {
        "price": 17.71,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 92,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 220,
        "unit": "円/m³"
      },
      "oil": {
        "price": 53.3,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1977",
      "electricity": {
        "price": 19.18,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 88,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 210,
        "unit": "円/m³"
      },
      "oil": {
        "price": 56.7,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1978",
      "electricity": {
        "price": 18.64,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 84,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 200,
        "unit": "円/m³"
      },
      "oil": {
        "price": 60,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1979",
      "electricity": {
        "price": 19.4,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 120,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 300,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 2.5
      },
      "notes": " "
    },
    {
      "year": "1980",
      "electricity": {
        "price": 27.54,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 150,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 500,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": "第二次オイルショック&#8203;:contentReference[oaicite:3]{index=3}"
    },
    {
      "year": "1981",
      "electricity": {
        "price": 28.26,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 160,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 550,
        "unit": "円/m³"
      },
      "oil": {
        "price": 100,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1982",
      "electricity": {
        "price": 28.42,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 170,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 600,
        "unit": "円/m³"
      },
      "oil": {
        "price": 110,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1983",
      "electricity": {
        "price": 28.65,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 160,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 580,
        "unit": "円/m³"
      },
      "oil": {
        "price": 100,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1984",
      "electricity": {
        "price": 28.77,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 140,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 550,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1985",
      "electricity": {
        "price": 28.89,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 120,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 500,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1986",
      "electricity": {
        "price": 26.87,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 100,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 460,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": "原油価格下落で値下げ&#8203;:contentReference[oaicite:4]{index=4}"
    },
    {
      "year": "1987",
      "electricity": {
        "price": 25.8,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 90,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 459.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 60,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1988",
      "electricity": {
        "price": 25.24,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 80,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 444.5,
        "unit": "円/m³"
      },
      "oil": {
        "price": 60,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3
      },
      "notes": " "
    },
    {
      "year": "1989",
      "electricity": {
        "price": 24.8,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 80,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 452.9,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1990",
      "electricity": {
        "price": 24.5,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 85,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 489.2,
        "unit": "円/m³"
      },
      "oil": {
        "price": 80,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": "湾岸危機で一時上昇"
    },
    {
      "year": "1991",
      "electricity": {
        "price": 24.2,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 80,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 518.8,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1992",
      "electricity": {
        "price": 24,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 80,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 525.2,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1993",
      "electricity": {
        "price": 25.01,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 78.6,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 529,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1994",
      "electricity": {
        "price": 24.8,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 77.2,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 528.7,
        "unit": "円/m³"
      },
      "oil": {
        "price": 68,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1995",
      "electricity": {
        "price": 24.6,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 75.8,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 531.7,
        "unit": "円/m³"
      },
      "oil": {
        "price": 66,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1996",
      "electricity": {
        "price": 24.4,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 74.4,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 539,
        "unit": "円/m³"
      },
      "oil": {
        "price": 64,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1997",
      "electricity": {
        "price": 24.2,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 73,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 574.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 62,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1998",
      "electricity": {
        "price": 24.44,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 71.6,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 573.5,
        "unit": "円/m³"
      },
      "oil": {
        "price": 60,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": " "
    },
    {
      "year": "1999",
      "electricity": {
        "price": 23.7,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 70,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 574.4,
        "unit": "円/m³"
      },
      "oil": {
        "price": 46.4,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 3.5
      },
      "notes": "石油価格低迷で灯油過去最安&#8203;:contentReference[oaicite:5]{index=5}"
    },
    {
      "year": "2000",
      "electricity": {
        "price": 23.1,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 76,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 582.1,
        "unit": "円/m³"
      },
      "oil": {
        "price": 50,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4
      },
      "notes": " "
    },
    {
      "year": "2001",
      "electricity": {
        "price": 22.6,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 82,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 590.2,
        "unit": "円/m³"
      },
      "oil": {
        "price": 55,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4
      },
      "notes": " "
    },
    {
      "year": "2002",
      "electricity": {
        "price": 22,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 88,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 588.4,
        "unit": "円/m³"
      },
      "oil": {
        "price": 60,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4
      },
      "notes": " "
    },
    {
      "year": "2003",
      "electricity": {
        "price": 21.5,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 94,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 590.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4
      },
      "notes": " "
    },
    {
      "year": "2004",
      "electricity": {
        "price": 21.3,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 100,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 593.4,
        "unit": "円/m³"
      },
      "oil": {
        "price": 80,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4
      },
      "notes": " "
    },
    {
      "year": "2005",
      "electricity": {
        "price": 21.13,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 100,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 611.1,
        "unit": "円/m³"
      },
      "oil": {
        "price": 80,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4.5
      },
      "notes": "電力小売自由化進展による効率化&#8203;:contentReference[oaicite:6]{index=6}"
    },
    {
      "year": "2006",
      "electricity": {
        "price": 21.5,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 110,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 642.1,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4.5
      },
      "notes": " "
    },
    {
      "year": "2007",
      "electricity": {
        "price": 21.5,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 120,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 664.2,
        "unit": "円/m³"
      },
      "oil": {
        "price": 100,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4.5
      },
      "notes": " "
    },
    {
      "year": "2008",
      "electricity": {
        "price": 22,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 150,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 719.1,
        "unit": "円/m³"
      },
      "oil": {
        "price": 138,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4.5
      },
      "notes": "原油価格高騰で灯油価格最高値"
    },
    {
      "year": "2009",
      "electricity": {
        "price": 21.5,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 100,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 701.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 80,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4.5
      },
      "notes": " "
    },
    {
      "year": "2010",
      "electricity": {
        "price": 21.39,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 110,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 713.2,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 4.5
      },
      "notes": "トップランナー制度で省エネ促進&#8203;:contentReference[oaicite:7]{index=7}"
    },
    {
      "year": "2011",
      "electricity": {
        "price": 22,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 120,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 728.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 100,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5
      },
      "notes": "東日本大震災後の電力不足で化石燃料需要増"
    },
    {
      "year": "2012",
      "electricity": {
        "price": 24,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 130,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 750.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 105,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5
      },
      "notes": " "
    },
    {
      "year": "2013",
      "electricity": {
        "price": 25,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 140,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 762.8,
        "unit": "円/m³"
      },
      "oil": {
        "price": 110,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5
      },
      "notes": " "
    },
    {
      "year": "2014",
      "electricity": {
        "price": 27,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 130,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 798.6,
        "unit": "円/m³"
      },
      "oil": {
        "price": 100,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5
      },
      "notes": "原油価格下落局面"
    },
    {
      "year": "2015",
      "electricity": {
        "price": 26,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 120,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 774.9,
        "unit": "円/m³"
      },
      "oil": {
        "price": 80,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5
      },
      "notes": " "
    },
    {
      "year": "2016",
      "electricity": {
        "price": 24.31,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 180,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 755,
        "unit": "円/m³"
      },
      "oil": {
        "price": 62.4,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5.8
      },
      "notes": "原油安でエネルギー価格低水準&#8203;:contentReference[oaicite:8]{index=8}"
    },
    {
      "year": "2017",
      "electricity": {
        "price": 25.73,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 190,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 760,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5.8
      },
      "notes": " "
    },
    {
      "year": "2018",
      "electricity": {
        "price": 27.23,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 200,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 770,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5.8
      },
      "notes": " "
    },
    {
      "year": "2019",
      "electricity": {
        "price": 27.44,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 202,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 781.7,
        "unit": "円/m³"
      },
      "oil": {
        "price": 100,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5.8
      },
      "notes": " "
    },
    {
      "year": "2020",
      "electricity": {
        "price": 25.82,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 195,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 787.7,
        "unit": "円/m³"
      },
      "oil": {
        "price": 70,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 5.8
      },
      "notes": "新型コロナで燃料価格低下&#8203;:contentReference[oaicite:9]{index=9}"
    },
    {
      "year": "2021",
      "electricity": {
        "price": 28.09,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 210,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 800.3,
        "unit": "円/m³"
      },
      "oil": {
        "price": 90,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 6.7
      },
      "notes": " "
    },
    {
      "year": "2022",
      "electricity": {
        "price": 34,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 233,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 860.8,
        "unit": "円/m³"
      },
      "oil": {
        "price": 130,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 6.7
      },
      "notes": "ウクライナ危機・円安で過去最高値&#8203;:contentReference[oaicite:10]{index=10}"
    },
    {
      "year": "2023",
      "electricity": {
        "price": 30,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 227,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 873.5,
        "unit": "円/m³"
      },
      "oil": {
        "price": 120,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 6.7
      },
      "notes": "政府の電気・ガス価格激変緩和措置適用&#8203;:contentReference[oaicite:11]{index=11}"
    },
    {
      "year": "2024",
      "electricity": {
        "price": 29,
        "unit": "円/kWh"
      },
      "cityGas": {
        "price": 220,
        "unit": "円/m³"
      },
      "lpg": {
        "price": 874.8,
        "unit": "円/m³"
      },
      "oil": {
        "price": 110,
        "unit": "円/L"
      },
      "ac_efficiency": {
        "value": 6.7
      },
      "notes": "燃料価格の緩和傾向"
    }
  ]
};