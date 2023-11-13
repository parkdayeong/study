'use strict';

// let condition = true;

// if (condition) {
//   console.log('참');
// }

//사용자로부터 숫자를 입력받고, 그 숫자가 양수인지, 음수인지,
//아니면 0인지 판별하고
//결과를 출력

// [1]

// let commit = document.querySelector('#commit');
// let inputBox = document.querySelector('input');
// let answerArea = document.querySelector('#answer');
// // console.log(commit, inputBox);

// commit.addEventListener('click', () => {
//   while (answerArea.firstChild) {
//     answerArea.removeChild(answerArea.firstChild);
//   }

//   let p = document.createElement('p');
//   answerArea.appendChild(p);

//   if (inputBox.value > 0) {
//     p.textContent = `${inputBox.value}는 양수입니다.`;
//   } else if (inputBox.value === '0') {
//     p.innerHTML = `${inputBox.value}는 0입니다.`;
//   } else if (inputBox.value < 0) {
//     p.innerHTML = `${inputBox.value}는 음수입니다.`;
//   } else {
//     p.innerHTML = `숫자를 입력해주세요`;
//   }

//   inputBox.value = '';
//   inputBox.focus();
// });

// [2]

// let number1 = document.querySelector('#num1');
// let number2 = document.querySelector('#num2');
// let sum = document.querySelector('#sum');
// let minus = document.querySelector('#minus');
// let divide = document.querySelector('#divide');
// let multiply = document.querySelector('#multiply');

// let answer = document.querySelector('#answer2');
// let operator = '';

// function colorChange() {
//   const colorChangeBtn = document.querySelectorAll('.color-change');
//   colorChangeBtn.forEach((button) => {
//     button.style.backgroundColor = 'white';
//     // console.log(button);
//   });
// }
// colorChange();

// sum.addEventListener('click', (event) => {
//   operator = '+';
//   colorChange();
//   event.target.style.backgroundColor = 'grey';
// });

// minus.addEventListener('click', (event) => {
//   operator = '-';
//   colorChange();
//   event.target.style.backgroundColor = 'grey';
// });

// divide.addEventListener('click', (event) => {
//   operator = '/';
//   colorChange();
//   event.target.style.backgroundColor = 'grey';
// });

// multiply.addEventListener('click', (event) => {
//   operator = '*';
//   colorChange();
//   event.target.style.backgroundColor = 'grey';
// });

// equals.addEventListener('click', () => {
//   colorChange();

//   let num1 = parseFloat(number1.value);
//   let num2 = parseFloat(number2.value);

//   let result = 0;
//   if (operator === '+') {
//     result = num1 + num2;
//   } else if (operator === '-') {
//     result = num1 - num2;
//   } else if (operator === '*') {
//     result = num1 * num2;
//   } else if (operator === '/') {
//     if (num2 === 0) {
//       answer.textContent = '0으로 나눌 수 없습니다.';
//       return;
//     } else {
//       result = num1 / num2;
//     }
//   } else {
//     answer.textContent = '연산자를 선택하세요';
//     return;
//   }
//   number1.value = '';
//   number2.value = '';
//   answer.textContent = `결과: ${result}`;
//   number1.focus();
// });

// [2]등급확인하기

// let submit = document.querySelector('#submit');
// let inputBox = document.querySelector('input');
// let gradeArea = document.querySelector('#grade');

// submit.addEventListener('click', () => {
//   let score = inputBox.value;
//   if (score >= 90) {
//     gradeArea.textContent = `점수: ${score}, A등급입니다.`;
//   } else if (score >= 80) {
//     gradeArea.textContent = `점수: ${score}, B등급입니다.`;
//   } else if (score >= 70) {
//     gradeArea.textContent = `점수: ${score}, C등급입니다.`;
//   } else if (score >= 60) {
//     gradeArea.textContent = `점수: ${score}, D등급입니다.`;
//   } else {
//     gradeArea.textContent = `점수: ${score}, F등급입니다.`;
//   }
// });

// let condition = 10;
// if (condition) {
//   console.log('참');
// } else {
//   console.log('거짓');
// }

// let subject = 'javascript';
// switch (subject) {
//   case 'java':
//     console.log('hi');
//   case 'javascript':
//     console.log('hello');
//}

/* 반복문 */
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let fruits = ['apple', 'pear', 'banana', 'grape'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let cat = {
//   name: 'cong',
//   age: 2,
//   weight: '4kg',
// };

// // let key = prompt('key를 입력해주세요.');
// // console.log(cat[key]);

// let keys = Object.keys(cat);

// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log(cat[key]);
// }

// console.log('-----------------------------');

// for (let key in cat) {
//   console.log(cat[key]);
// }
// console.log('-----------------------------');

// let fruits = ['apple', 'pear', 'banana', 'grape'];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// while

// do...while
// let count = 5;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// console.log('-----------------------------');

// let number = 5;
// do {
//   console.log(number);
//   number++;
// } while (number < 5);

// let text = '';
// console.log(1 + 2);
// console.log('javascript' + 'hello');
// console.log('javascr
let text = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    // continue;
    break;
  }
  text = text + i;
}

console.log(text);
