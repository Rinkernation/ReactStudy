/**
 * JS基礎 演習用ファイル
 * docs/JS基礎/演習/ の問題を見ながらここにコードを書いていきましょう。
 * 
 * 実行方法：
 * index.html の <script src="src/index.js"></script> を
 * <script src="src/practice.js"></script> に書き換えてブラウザで確認してください。
 */

console.log("practice.jsが読み込まれました");

// ここから下にコードを書いてください
const nameArr = ["田中", "山田", "佐藤"];
const newNameArr = nameArr.map((name) => `${name}さん`);
console.log(newNameArr);

const numArr = [1, 4, 6, 8, 2, 10];
const newNumArr = numArr.filter((num) => num > 5);
console.log(newNumArr);

const amount = 1200;
const message = amount >= 1000 ? "予算オーバー":"予算内";

console.log(message);



