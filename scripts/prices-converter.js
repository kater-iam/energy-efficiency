#!/usr/bin/env node

/**
 * 古い形式のCSVファイルをTypeScriptデータに変換するスクリプト
 * 使用方法: node scripts/prices-converter.js <input.csv> [output.ts]
 * デフォルトの出力先: src/data/historicalEnergyPrices.ts
 * 
 * 対応CSVフォーマット:
 * 年,電気代 (円/kWh),都市ガス価格 (円/立方メートル),プロパンガス価格 (円/立方メートル),灯油価格 (円/L),エアコンのCOPまたはAPF,備考
 */

import fs from 'fs-extra';
import csvParser from 'csv-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// ESモジュールで __dirname を取得するための対応
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 引数の処理
const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3] || 'src/data/historicalEnergyPrices.ts';

if (!inputFilePath) {
  console.error('エラー: 入力CSVファイルを指定してください');
  console.error('使用方法: node scripts/prices-converter.js <input.csv> [output.ts]');
  process.exit(1);
}

// ヘッダーテンプレート
const headerTemplate = `// 歴史的エネルギー価格データをTypeScriptとして直接定義
// このファイルは scripts/prices-converter.js によって自動生成されました
// 生成日時: ${new Date().toISOString()}

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
`;

// フッターテンプレート
const footerTemplate = `  ]
};`;

// 結果を格納する配列
const results = [];

// CSVファイルの読み込みと処理
fs.createReadStream(inputFilePath)
  .pipe(csvParser({
    mapHeaders: ({ header }) => {
      // CSVのヘッダーマッピング
      const headerMap = {
        '年': 'year',
        '電気代 (円/kWh)': 'electricity_price',
        '都市ガス価格 (円/立方メートル)': 'city_gas_price',
        'プロパンガス価格 (円/立方メートル)': 'lpg_price',
        '灯油価格 (円/L)': 'oil_price',
        'エアコンのCOPまたはAPF': 'ac_efficiency_value',
        '備考': 'notes'
      };
      return headerMap[header] || header;
    }
  }))
  .on('data', (data) => {
    try {
      // CSVの各行からエネルギーデータオブジェクトを構築
      const energyData = {
        year: data.year,
        electricity: {
          price: parseFloat(data.electricity_price) || 0,
          unit: '円/kWh'
        },
        cityGas: {
          price: parseFloat(data.city_gas_price) || 0,
          unit: '円/m³'
        },
        lpg: {
          price: data.lpg_price ? parseFloat(data.lpg_price) : null,
          unit: '円/m³'
        },
        oil: {
          price: parseFloat(data.oil_price) || 0,
          unit: '円/L'
        },
        ac_efficiency: {
          value: data.ac_efficiency_value ? parseFloat(data.ac_efficiency_value) : null
        },
        notes: data.notes || ''
      };
      
      results.push(energyData);
    } catch (err) {
      console.error(`行の処理中にエラーが発生しました: ${JSON.stringify(data)}`);
      console.error(err);
    }
  })
  .on('end', () => {
    // 結果を年の昇順でソート
    results.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    
    // 出力フォーマットの構築
    let outputData = headerTemplate;
    
    results.forEach((item, index) => {
      const isLast = index === results.length - 1;
      
      outputData += `    {
      "year": "${item.year}",
      "electricity": {
        "price": ${item.electricity.price},
        "unit": "${item.electricity.unit}"
      },
      "cityGas": {
        "price": ${item.cityGas.price},
        "unit": "${item.cityGas.unit}"
      },
      "lpg": {
        "price": ${item.lpg.price === null ? 'null' : item.lpg.price},
        "unit": "${item.lpg.unit}"
      },
      "oil": {
        "price": ${item.oil.price},
        "unit": "${item.oil.unit}"
      },
      "ac_efficiency": {
        "value": ${item.ac_efficiency.value === null ? 'null' : item.ac_efficiency.value}
      },
      "notes": "${item.notes.replace(/"/g, '\\"')}"
    }${isLast ? '' : ','}\n`;
    });
    
    outputData += footerTemplate;
    
    // 出力ディレクトリの作成（存在しない場合）
    fs.ensureDirSync(path.dirname(outputFilePath));
    
    // ファイルへの書き込み
    fs.writeFileSync(outputFilePath, outputData);
    
    console.log(`${results.length}件のデータを ${outputFilePath} に書き込みました`);
  })
  .on('error', (err) => {
    console.error('CSVファイルの読み込み中にエラーが発生しました:', err);
    process.exit(1);
  }); 