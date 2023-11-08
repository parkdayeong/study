'use strict';

// // [1] literal Syntax **
// let fruits = ['apple', 'watermelon', 'mango'];
// // [2] array constructor Syntax
// // let fruits = new Array('apple', 'watermelon', 'mango');

// console.log(fruits);

// // [2] 자주 사용되는 배열 API
// // ---------------------------------
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);

// // //----------------------------------
// // console.log(`fruits.length : ${fruits.length}`);
// // console.log(`마지막 값 : ${fruits[fruits.length - 1]}`);

// //forEach()--------------------------------
// // fruits.forEach(function (item, index) {
// //   console.log(index, item);
// // });

// // //pop()  뒤에서 제거--------------------------------
// // let removedItem = fruits.pop();
// // console.log(`removedItem : ${removedItem}`);
// // console.log(fruits);

// // // shift() 앞에서 제거--------------------------------
// // let removedItem = fruits.shift();
// // console.log(`removedItem : ${removedItem}`);
// // console.log(fruits);

// //push() 뒤에 추가 --------------------------------
// fruits.push('pineapple');
// console.log(`push pineapple --> fruits : ${fruits}`);

// // unshift() 앞에추가 ---------------------------
// fruits.unshift('strawberry');
// console.log(`unshift strawberry --> fruits : ${fruits}`);

// // indexOf() index알아보기--------------------
// const index = fruits.indexOf('watermelon');
// console.log(index);

// // splice()
// fruits.splice(index, 1);
// console.log(fruits);

// [3] 구조분해 할당 Distructuring assignment

// let fruits = ['사과', '바나나', '딸기', 'a', 'b', 'c'];
// // let apple = fruits[0];
// // let banana = fruits[1];
// // let strawberry = fruits[2];

// let [apple, banana, strawberry, ...others] = fruits;
// console.log(apple, banana, strawberry, others);

// //[4] Spread syntax 전개구문
// let fruits = ['사과', '바나나', '딸기', 'a', 'b', 'c'];
// let fruits2 = ['파인애플', '수박'];
// let items = fruits + fruits2 + 'ee';
// let items2 = [...fruits, ...fruits2, 'ee'];
// console.log(items);
// console.log(items2);

// [5] Rest parameters

// print('a', 'b', 'c', 'd', 'c', 'dd', 'cong', 'dddddd');

// function print(...values) {
//   values.forEach(function (value, index) {
//     console.log(index, value);
//   });
// }

// [6] Copy
// ----얕은 복사 Shallow copy
// let source = ['apple', 'banana', 'strawberry'];
// let target = source;
// target[0] = 'watermelon';
// console.log(source);
// console.log(target);

// ----깊은 복사 deep copy
let source = ['apple', 'banana', 'strawberry'];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = 'watermelon';
console.log(source);
console.log(target);
