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
// const arrowfunc = (x,y) => {
//   return console.log(x+y);
// };
// arrowfunc(5,3);

// 引数が１つのときは（）を省略できる
// const echoMessage = str => {
//   return console.log(str);
// };
// echoMessage("Hello, World");

// Reactでよく使われる。オブジェクトを返すときの書き方
// const func = (num1, num2) => ({
//   hoge: num1,
//   fuga: num2
// });

// console.log(func(10,30));

// 分割代入
// const myProfile = {
//   name: "ももたろう",
//   age: 25
// };
// const msg = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(msg);

// const {name, age} = myProfile;
// const msg1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(msg1);

// const myProfile = ["ももたろう", 25];
// const msg2 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(msg2);
// const [userName, userAge] = myProfile;
// const msg3 = `私の名前は${userName}です。年齢は${userAge}です。`;
// console.log(msg3);

// デフォルト値（引数、分割代入）
// const sayHello = (name="きんたろう") => console.log(`こんにちは、${name}さん`);
// sayHello("momotaro");
// sayHello();

// const myProfile = {
//   age: 30
// };
// const { age, name="momotaro" } = myProfile;
// console.log(age);
// console.log(name);

// スプレッド構文 ... これが一番使う
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 以下のコピーの仕方はだめ
// 参照受け渡しのため
// const arr8 = arr4;
// console.log(arr8);
// arr8の中身を変更すると、arr4の中身も変わってしまう

// mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => {
//   console.log(name);
// });

// const numArr = [1, 2, 3, 4, 5];
// const oddNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// oddNumArr.map((num) => console.log(num));
const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index+1}番目は${nameArr[index]}です。`);
// };
// nameArr.map((name, index) => {
//   console.log(`${index+1}番目は${name}です。`);
// });

const newNameArr = nameArr.map((name) => {
  return name === "佐藤" ? name+"さん" : name;
});
console.log(newNameArr);