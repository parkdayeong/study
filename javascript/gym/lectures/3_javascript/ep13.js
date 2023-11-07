'use strict';

// [1] literal Syntax **
let fruits = ['apple', 'watermelon', 'mango'];
// [2] array constructor Syntax
// let fruits = new Array('apple', 'watermelon', 'mango');

console.log(fruits[0]);
fruits[0] = 'berry';
console.log(fruits[0]);
console.log(fruits);

// [2] 자주 사용되는 배열 API
// ---------------------------------
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);

//----------------------------------
console.log(`fruits.length : ${fruits.length}`);
console.log(`마지막 값 : ${fruits[fruits.length - 1]}`);

//push()--------------------------------
fruits.push('blueberries');
console.log(`fruit : ${fruits}`);

//forEach()--------------------------------
fruits.forEach(function (item, index) {
  console.log(index, item);
});
