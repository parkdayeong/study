/* strict mode */
'use strict';

/* calculator */

//variable
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');
let resultArea = document.querySelector('#result');

//function btnColorReset
const btnColorReset = () => {
  let operatorBtn = document.querySelectorAll('.operator-btn');
  operatorBtn.forEach((value) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

//function btnColorChange

const btnColorChange = (self) => {
  self.target.style.backgroundColor = 'black';
  self.target.style.color = 'white';
};

//operator buttons
let operator = '';

sum.addEventListener('click', (value) => {
  operator = '+';
  btnColorReset();
  btnColorChange(value);
});

min.addEventListener('click', (value) => {
  operator = '-';
  btnColorReset();
  btnColorChange(value);
});

multiply.addEventListener('click', (value) => {
  operator = '*';
  btnColorReset();
  btnColorChange(value);
});

divide.addEventListener('click', (value) => {
  operator = '/';
  btnColorReset();
  btnColorChange(value);
});

// calculate
equal.addEventListener('click', () => {
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
    resultArea.textContent = '수식을 입력해주세요.';
    return;
  }
  resultArea.textContent = `결과 : ${result}`;
});

/* ball,strike */

let strike = 0;
let ball = 0;

let answer = ['1', '5', '2', '8'];
let num = '5124';

answer.forEach((value, index) => {
  // console.log(index, value);
  let i = num.indexOf(value);
  if (i > 0) {
    if ((i = index)) {
      strike += 1;
    }
    ball += 1;
  }
});

/* createElement */
let addBeforeBtn = document.querySelector('#before');
let addBtn = document.querySelector('#add');
let targetRemoveBtn = document.querySelector('#target-remove');
let inputBox = document.querySelector('#input-text');

addBtn.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = inputBox.value;
  let removeBtn = document.createElement('button');
  li.appendChild(removeBtn);
  removeBtn.textContent = 'X';
  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });

  inputBox.value = '';
  inputBox.focus();
});
