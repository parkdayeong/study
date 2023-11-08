// Strict mode
'use strict';

//Array.prototype[@@iterator]()

// const array = ['a', 'b', 'c'];
// const iterator = array[Symbol.iterator]();
// for (const value of iterator) {
//   console.log(value);
// }

const answer = [3, 1, 4, 6];
const value = '3164';
let strike = 0;
let ball = 0;

answer.forEach((element, i) => {
  const index = value.indexOf(element);
  if (index > -1) {
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
});
