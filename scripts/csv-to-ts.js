#!/usr/bin/env node

/**
 * CSVファイルをTypeScriptデータに変換するスクリプト
 * 使用方法: node scripts/csv-to-ts.js <input.csv> [output.ts]
 * デフォルトの出力先: src/data/energyPrices.ts
 * 
 * CSVフォーマット:
 * year,electricity_price,electricity_unit,electricity_note,gas_price,gas_unit,gas_note,oil_price,oil_unit,oil_note,ac_efficiency_value,ac_efficiency_note,notes
 * 2019,25.5,円/kWh,基本料金と従量課金の全国平均,145.2,円/m³,都市ガスの全国平均単価,92.1,円/L,灯油の全国平均価格,4.2,一般家庭用エアコンの平均APF値,消費税8%から10%への増税前の価格
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
const outputFilePath = process.argv[3] || 'src/data/energyPrices.ts';

if (!inputFilePath) {
  console.error('エラー: 入力CSVファイルを指定してください');
  console.error('使用方法: node scripts/csv-to-ts.js <input.csv> [output.ts]');
  process.exit(1);
}

// ヘッダーテンプレート
const headerTemplate = `// エネルギー価格データをTypeScriptとして直接定義
// このファイルは scripts/csv-to-ts.js によって自動生成されました
// 生成日時: ${new Date().toISOString()}

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
`;

// フッターテンプレート
const footerTemplate = `  ]
};`;

// 結果を格納する配列
const results = [];

// CSVファイルの読み込みと処理
fs.createReadStream(inputFilePath)
  .pipe(csvParser())
  .on('data', (data) => {
    try {
      // CSVの各行からエネルギーデータオブジェクトを構築
      const energyData = {
        year: data.year,
        electricity: {
          price: parseFloat(data.electricity_price),
          unit: data.electricity_unit,
          note: data.electricity_note
        },
        gas: {
          price: parseFloat(data.gas_price),
          unit: data.gas_unit,
          note: data.gas_note
        },
        oil: {
          price: parseFloat(data.oil_price),
          unit: data.oil_unit,
          note: data.oil_note
        },
        ac_efficiency: {
          value: parseFloat(data.ac_efficiency_value),
          note: data.ac_efficiency_note
        },
        notes: data.notes
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
        "unit": "${item.electricity.unit}",
        "note": "${item.electricity.note}"
      },
      "gas": {
        "price": ${item.gas.price},
        "unit": "${item.gas.unit}",
        "note": "${item.gas.note}"
      },
      "oil": {
        "price": ${item.oil.price},
        "unit": "${item.oil.unit}",
        "note": "${item.oil.note}"
      },
      "ac_efficiency": {
        "value": ${item.ac_efficiency.value},
        "note": "${item.ac_efficiency.note}"
      },
      "notes": "${item.notes}"
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