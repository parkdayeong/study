/*-------------------------------
Strict Mode
-------------------------------*/
'use strict';

/*-------------------------------
SetInterval,  clearInterval
-------------------------------*/
/**
 * class명 : go, stop
 */

// let myBox = document.querySelector('#my_box');
// let startBtn = document.querySelector('#start');
// let stopBtn = document.querySelector('#stop');

// let nInterId;
// // function setInterval
// const setInterval = () => {
//   nInterId = setInterval(toggleClass, 500);
// };

// // function toggleClass
// const toggleClass = () => {
//   myBox.className = myBox.className === 'go' ? 'stop' : 'go';
// };

// // function clearInterval
// const clearInterval = () => {
//   clearInterval(nInterId);
//   nInterId = null;
// };

// // function start,stop
// startBtn.addEventListener('click', setInterval);
// stopBtn.addEventListener('click', clearInterval);

/*-------------------------------
even Or odd
-------------------------------*/
// let numberBox = document.querySelector('#number-box');
// let evenOrOddBtn = document.querySelector('#even-or-odd-btn');
// let resultArea = document.querySelector('#result');
// let even = document.querySelector('.even');
// let odd = document.querySelector('.odd');

// let nIntervalId;

// evenOrOddBtn.addEventListener('click', () => {
//   let num = parseFloat(numberBox.value);
//   let i = 0;
//   if (num % 2 === 0) {
//     even.style.color = 'red';
//     odd.style.color = 'black';
//   } else if (num % 2 === 1) {
//     even.style.color = 'black';
//     odd.style.color = 'red';
//   } else {
//     numberBox.placeholder = '숫자를 입력해주세요.';
//     blinkResult(i);
//   }
// });

// const blinkResult = (i) => {
//   nIntervalId = setInterval(() => {
//     toggleClass2();
//     i += 1;
//     if (i === 10) {
//       clearInterval(nIntervalId);
//     }
//   }, 500);
// };

// const toggleClass2 = () => {
//   resultArea.classList.toggle('txt-line');
// };

/*-------------------------------
login
-------------------------------*/
let emailBox = document.querySelector('#email');
let passwordBox = document.querySelector('#password');
let loginBtn = document.querySelector('#login');
let resultArea1 = document.querySelector('#result-area1');

loginBtn.addEventListener('click', () => {
  let email = emailBox.value;
  let password = passwordBox.value;
  if (email === '' || email.includes('@') === false) {
    resultArea1.textContent = '이메일이 유효하지않습니다.';
  } else if (!password) {
    resultArea1.textContent = '비밀번호를 입력해주세요.';
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    resultArea1.textContent = '비밀번호는 8~16자리입니다.';
  } else {
    resultArea1.textContent = '로그인성공';
  }
});

/*-------------------------------
calculator
-------------------------------*/
let number1Box = document.querySelector('#number1');
let number2Box = document.querySelector('#number2');
let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');
let resultArea2 = document.querySelector('#result-area2');

// function colorReset
const colorReset = () => {
  let operatorBtns = document.querySelectorAll('.operator-btn');
  operatorBtns.forEach((v) => {
    v.style.backgroundColor = ' white';
    v.style.color = 'black';
  });
};

// refactoring ---> colorChange
const colorChange = (s) => {
  s.target.style.backgroundColor = 'black';
  s.target.style.color = 'white';
};

// function operator
let operator;
sum.addEventListener('click', (e) => {
  operator = '+';
  colorReset();
  colorChange(e);
});
min.addEventListener('click', (e) => {
  operator = '-';
  colorReset();
  colorChange(e);
});
multiply.addEventListener('click', (e) => {
  operator = '*';
  colorReset();
  colorChange(e);
});
divide.addEventListener('click', (e) => {
  operator = '/';
  colorReset();
  colorChange(e);
});

//function equal
equal.addEventListener('click', () => {
  let num1 = parseFloat(number1Box.value);
  let num2 = parseFloat(number2Box.value);

  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      resultArea2.textContent = '0으로 나눌 수 없습니다  error';
      return;
    } else {
      num1 / num2;
    }
  } else {
    resultArea2.textContent = '숫자나 수식을 선택해주세요';
    return;
  }
  resultArea2.textContent = `결과 : ${result}`;
});

/*-------------------------------
createElement
-------------------------------*/
let inputBox = document.querySelector('#input-text');
let addBeforeBtn = document.querySelector('#before');
let addBtn = document.querySelector('#add');
let targetRemoveBtn = document.querySelector('#target-remove');
let target = document.querySelector('#target');

addBtn.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = inputBox.value;
  let removeBtn = document.createElement('button');
  li.appendChild(removeBtn);
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  inputBox.focus();
  inputBox.value = '';
});

/*-------------------------------
dayNightHandler
-------------------------------*/
let body = document.querySelector('body');

const dayNightHandler = (self) => {
  if (self.value === 'night') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    self.value = 'day';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    self.value = 'night';
  }
};
