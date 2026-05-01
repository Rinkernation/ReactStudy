# JS基礎: mapとfilterを使った配列の処理

従来のJavaScriptでは、配列の要素を順番に処理するために `for` 文がよく使われていたが、モダンなJavaScriptやReact開発では **`map`** や **`filter`** といった配列メソッドを使用するのが主流である。

## 1. map（配列の変換）

`map` は、配列の要素を1つずつ取り出して処理を行い、**「処理結果を格納した新しい配列」** を作成するメソッドである。
`for` 文に比べて記述がシンプルになり、何をしているのかが直感的に分かりやすい。

```javascript
const nameArr = ['田中', '山田', '佐藤'];

// 【従来の書き方】 for文
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// 【Reactで推奨される書き方】 mapメソッド
// 引数には (現在の要素, インデックス番号) が入る
nameArr.map((name, index) => {
  console.log(`${index + 1}番目は${name}です`);
});

// 新しい配列を作る例（条件分岐を含めることも可能）
const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`; // 佐藤以外には「さん」を付ける
  }
});
console.log(newNameArr); // ["田中さん", "山田さん", "佐藤"]
```

## 2. filter（配列の抽出）

`filter` は、配列の要素に対して条件テストを行い、**「条件に一致（true）した要素だけを集めた新しい配列」** を作成するメソッドである。

```javascript
const numArr = [1, 2, 3, 4, 5];

// 奇数（2で割った余りが1になる数）だけを抽出する
const oddNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(oddNumArr); // [1, 3, 5]
```

## 3. Reactでの活用シーン
Reactでは、「配列のデータをもとに、複数のHTML（JSX）要素のリストを画面に描画する」という要件が頻繁に発生する。
JSXの中では `for` 文を直接書くことができないため、ほぼ100%の確率で `map` メソッドを使用してリストの描画を行うことになる。
（例：ToDoリストのタスク一覧を表示する、ユーザー一覧を表示するなど）
