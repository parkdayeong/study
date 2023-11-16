// Strict Mode
'use strict';

/* even or odd */
// variable
let numberBox = document.querySelector('#number-box');
let evenOrOddBtn = document.querySelector('#even-or-odd-btn');
let even = document.querySelector('.even');
let odd = document.querySelector('.odd');

// console.log(numberBox, evenOrOddBtn, even, odd);

evenOrOddBtn.addEventListener('click', () => {
  let num = parseFloat(numberBox.value);
  if (num % 2 === 1) {
    even.style.color = 'black';
    odd.style.color = 'red';
  } else if (num % 2 === 0) {
    even.style.color = 'red';
    odd.style.color = 'black';
  } else {
    numberBox.focus();
    numberBox.placeholder = '숫자를 입력해주세요.';
  }
});

/* login Action */

// variable
let emailBox = document.querySelector('[name=email');
let passwordBox = document.querySelector('[name=password');
let loginBtn = document.querySelector('#login');
let resultArea1 = document.querySelector('#result-area1');

// validate email, password

loginBtn.addEventListener('click', () => {
  let email = emailBox.value;
  let password = passwordBox.value;

  if (email === '' || email.includes('@') === false) {
    resultArea1.textContent = '이메일이 유효하지않습니다.';
    emailBox.focus();
    emailBox.style.outlineColor = 'red';
  } else if (!password) {
    resultArea1.textContent = '비밀번호를 입력해주세요.';
    passwordBox.focus();
    passwordBox.style.outlineColor = 'red';
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    resultArea1.textContent = '비밀번호는 8~16자리입니다.';
    passwordBox.focus();
    passwordBox.style.outlineColor = 'red';
  } else {
    resultArea1.textContent = '로그인성공';
  }
});

/* calculator */

let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

let resultArea2 = document.querySelector('#result-area2');

//function btnColorReset
const btnColorReset = () => {
  let operatorBtns = document.querySelectorAll('.operator-btn');
  operatorBtns.forEach((value) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

// function btnColorChange
const btnColorChange = (self) => {
  self.target.style.backgroundColor = 'black';
  self.target.style.color = 'white';
};

// operator-btns
let operator = '';

sum.addEventListener('click', (event) => {
  operator = '+';
  btnColorReset();
  btnColorChange(event);
});

min.addEventListener('click', (event) => {
  operator = '-';
  btnColorReset();
  btnColorChange(event);
});

multiply.addEventListener('click', (event) => {
  operator = '*';
  btnColorReset();
  btnColorChange(event);
});

divide.addEventListener('click', (event) => {
  operator = '/';
  btnColorReset();
  btnColorChange(event);
});

//equal
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
    resultArea2.textContent = '수식을 입력해주세요.';
    return;
  }
  resultArea2.textContent = `result : ${result}`;
});
