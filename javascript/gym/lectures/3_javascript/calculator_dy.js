'use strict';

//variable
let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let buttons = document.querySelectorAll('.operator-btn');
let resultArea = document.querySelector('#result-area');

//function colorChange
const colorChange = () => {
  let operatorBtn = document.querySelectorAll('.operator-btn');
  operatorBtn.forEach((value, index) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

//operator
let operator = '';

sum.addEventListener('click', (event) => {
  colorChange();
  operator = '+';
  event.target.style.backgroundColor = 'cadetblue';
  event.target.style.color = 'white';
});

min.addEventListener('click', (event) => {
  colorChange();
  operator = '-';
  event.target.style.backgroundColor = 'cadetblue';
  event.target.style.color = 'white';
});

multiply.addEventListener('click', (event) => {
  colorChange();
  operator = '*';
  event.target.style.backgroundColor = 'cadetblue';
  event.target.style.color = 'white';
});

divide.addEventListener('click', (event) => {
  colorChange();
  operator = '/';
  event.target.style.backgroundColor = 'cadetblue';
  event.target.style.color = 'white';
});

// 계산식

equal.addEventListener('click', () => {
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
      resultArea.textContent = '0으로 나눌 수 없습니다.';
      return;
    } else {
      result = num1 / num2;
    }
  } else {
    resultArea.textContent = '연산자를 선택해주세요';
    return;
  }

  resultArea.textContent = `결과 : ${result}`;
});
