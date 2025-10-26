/*
  const, let等の変数宣言
*/

// var val1 = "変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き可能"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再宣言可能"
// console.log(val1);


// let val2 = "let変数宣言";
// console.log(val2);

// val2 = "再代入";
// console.log(val2);

// const val3 = "const変数宣言";
// console.log(val3);

// val3 = "再代入";
// const val3 = "a";

// const val4 = {
//   name: "taro",
//   age: 25
// };

// console.log(val4);
// console.log(val4.name);
// console.log(val4.age);

// val4.address = "tokyo";
// console.log(val4);

// val4.age = 30;
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// console.log(val5[0]);
// console.log(val5[1]);
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "ももたろう";
// const age = 25;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// アロー関数
// function add(x, y) {
//   return x+y;
// };
// 関数を一度変数に渡すこともできる
// const add = function(x, y) {
//   return x+y;
// };

// console.log(add(5,3));
// function hello(str) {
//   console.log(str);
// }
// hello("hello");

// アロー関数
const arrowfunc = (x,y) => {
  return console.log(x+y);
};
arrowfunc(5,3);

// 引数が１つのときは（）を省略できる
const echoMessage = str => {
  return console.log(str);
};
echoMessage("Hello, World");

// Reactでよく使われる。オブジェクトを返すときの書き方
const func = (num1, num2) => ({
  hoge: num1,
  fuga: num2
});

console.log(func(10,30));

