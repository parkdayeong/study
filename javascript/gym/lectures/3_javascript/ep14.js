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

let number1 = document.querySelector('#num1');
let number2 = document.querySelector('#num2');
let sum = document.querySelector('#sum');
let minus = document.querySelector('#minus');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');

let answer = document.querySelector('#answer2');
let operator = '';

function colorChange() {
  const colorChangeBtn = document.querySelectorAll('.color-change');
  colorChangeBtn.forEach((button) => {
    button.style.backgroundColor = 'white';
    // console.log(button);
  });
}
colorChange();

sum.addEventListener('click', (event) => {
  operator = '+';
  colorChange();
  event.target.style.backgroundColor = 'grey';
});

minus.addEventListener('click', (event) => {
  operator = '-';
  colorChange();
  event.target.style.backgroundColor = 'grey';
});

divide.addEventListener('click', (event) => {
  operator = '/';
  colorChange();
  event.target.style.backgroundColor = 'grey';
});

multiply.addEventListener('click', (event) => {
  operator = '*';
  colorChange();
  event.target.style.backgroundColor = 'grey';
});

equals.addEventListener('click', () => {
  colorChange();

  let num1 = parseFloat(number1.value);
  let num2 = parseFloat(number2.value);

  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      answer.textContent = '0으로 나눌 수 없습니다.';
      return;
    } else {
      result = num1 / num2;
    }
  } else {
    answer.textContent = '연산자를 선택하세요';
    return;
  }
  number1.value = '';
  number2.value = '';
  answer.textContent = `결과: ${result}`;
  number1.focus();
});
