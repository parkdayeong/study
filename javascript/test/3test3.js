// Strict Mode
'use strict';

/* even or odd */

// variable
let numberBox = document.querySelector('#number-box');
let evenOrOddBtn = document.querySelector('#even-or-odd-btn');
let even = document.querySelector('.even');
let odd = document.querySelector('.odd');

// addEventListener click
evenOrOddBtn.addEventListener('click', () => {
  let num = parseFloat(numberBox.value);

  if (num % 2 === 1) {
    even.style.color = 'black';
    odd.style.color = 'red';
  } else if (num % 2 === 0) {
    even.style.color = 'red';
    odd.style.color = 'black';
  } else {
    numberBox.placeholder = '숫자를 입력해주세요.';
  }
});

/* login */

// variable
let emailBox = document.querySelector('[name = email]');
let passwordBox = document.querySelector('[name=password');
let loginBtn = document.querySelector('#login');
let resultArea1 = document.querySelector('#result-area1');

// console.log(emailBox, passwordBox, loginBtn, resultArea1);

// validate email, password
loginBtn.addEventListener('click', () => {
  let email = emailBox.value;
  let password = passwordBox.value;

  if (email === '' || email.includes('@') === false) {
    resultArea1.textContent = '이메일이 유효하지않습니다.';
  } else if (!password) {
    resultArea1.textContent = '비밀번호를 입력해주세요.';
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    resultArea1.textContent = '비밀번호는 8~16 숫자입니다.';
  } else {
    resultArea1.textContent = 'login success';
  }
});

/* calculator */

// variable
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

let resultArea2 = document.querySelector('#result-area2');

// function btnColorReset
const btnColorReset = () => {
  let operatorBtns = document.querySelectorAll('.operator-btn');
  operatorBtns.forEach((value) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

// operator btns
let operator = '';
sum.addEventListener('click', (event) => {
  operator = '+';
  btnColorReset();
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});

min.addEventListener('click', (event) => {
  operator = '-';
  btnColorReset();
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});

multiply.addEventListener('click', (event) => {
  operator = '*';
  btnColorReset();
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});

divide.addEventListener('click', (event) => {
  operator = '/';
  btnColorReset();
  event.target.style.backgroundColor = 'black';
  event.target.style.color = 'white';
});

// equal

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
      resultArea2.textContent = '0으로 나눌 수 없음 error';
      return;
    } else {
      result = num1 / num2;
    }
  } else {
    resultArea2.textContent = '수식을 입력해주세요';
    return;
  }
  resultArea2.textContent = `result : ${result}`;
});

/* indexOf, forEach */
let answerBox = document.querySelector('#answer-box');
let numBox = document.querySelector('#num-box');
let gameStartBtn = document.querySelector('#game-start-btn');
let resultArea3 = document.querySelector('#result-area3');

gameStartBtn.addEventListener('click', () => {
  let strike = 0;
  let ball = 0;
  let answerNum = parseFloat(answerBox.value);
  let numNum = parseFloat(numBox.value);
  let answer = Array.from(String(answerNum));
  let num = String(numNum);

  answer.forEach((value, index) => {
    let i = num.indexOf(value);
    if (i >= 0) {
      if (i === index) {
        strike += 1;
      }
      ball += 1;
    }
  });

  resultArea3.textContent = `Strikes: ${strike}, Balls: ${ball}`;
});
