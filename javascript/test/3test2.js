/* strict mode */
'use strict';

/* Text Color Change */

// variable
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let myBox = document.querySelector('#my_box');
let nIntervId;

//function changeColor
const changeColor = () => {
  if (!nIntervId) {
    nIntervId = setInterval(changeId, 500);
  }
};

// function changeId
const changeId = () => {
  myBox.className = myBox.className === 'go' ? 'stop' : 'go';
};

// function stopchangeColor
const stopChangeColor = () => {
  clearInterval(nIntervId);
  nIntervId = null;
};

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

/* Even or Odd */

// variable
let numberBox = document.querySelector('#number-box');
let evenOrOddBtn = document.querySelector('#even-or-odd-btn');
let resultArea = document.querySelector('#result');
let even = document.querySelector('.even');
let odd = document.querySelector('.odd');

evenOrOddBtn.addEventListener('click', () => {
  let number = parseFloat(numberBox.value);
  if (number % 2 === 0) {
    odd.style.color = 'black';
    even.style.color = 'red';
  } else if (number % 2 === 1) {
    even.style.color = 'black';
    odd.style.color = 'red';
  } else {
    numberBox.placeholder = '숫자를 입력해주세요';
    function blink(count) {
      resultArea.classList.toggle('txt-redline');
      if (count > 0) {
        setTimeout(() => blink(count - 1), 300);
      }
    }
    blink(5);
  }
});

/* login */

// variable
let emailBox = document.querySelector('#email');
let passwordBox = document.querySelector('#password');
let loginBtn = document.querySelector('#login');
let resultArea = document.querySelector('#result-area');

// refactoring ---> focusBox
const focusBox = (self) => {
  self.focus();
  self.style.outlineColor = 'red';
};

// validate email,password
loginBtn.addEventListener('click', () => {
  let email = emailBox.value;
  let password = passwordBox.value;

  if (email === '' || email.includes('@') === false) {
    resultArea.textContent = '이메일이 유효하지않습니다.';
    focusBox(emailBox);
  } else if (!password) {
    resultArea.textContent = '비밀번호를 입력해주세요.';
    focusBox(passwordBox);
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    resultArea.textContent = '비밀번호는 8~16자리입니다.';
    focusBox(passwordBox);
  } else {
    resultArea.textContent = '로그인 성공';
    resultArea.style.color = 'red';
  }
});

/* calculator */

//variable

let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

//function btnColorReset
const btnColorReset = () => {
  let operatorBtns = document.querySelectorAll('.operator-btn');
  operatorBtns.forEach((value) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

//refactoring ---> function btnColorChange
const btnColorChange = (self) => {
  self.target.style.backgroundColor = 'black';
  self.target.style.color = 'white';
};

//operator buttons
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

// equal button
let resultArea = document.querySelector('#result-area');

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
      resultArea.textContent = 'error';
      return;
    } else {
      result = num1 / num2;
    }
  } else {
    resultArea.textContent = 'error';
    return;
  }
  resultArea.textContent = `result : ${result}`;
});

//strike ball

let strike = 0;
let ball = 0;
let answer = ['1', '5', '2', '8'];
let num = '5124';

answer.forEach((value, index) => {
  let i = num.indexOf(value);
  if (i > 0) {
    if ((i = index)) {
      strike += 1;
    }
    ball += 1;
  }
});

//createElement

let inputBox = document.querySelector('#input-text');
let addBeforeBtn = document.querySelector('#before');
let addBtn = document.querySelector('#add');
let removeTargetBtn = document.querySelector('#target-remove');
let target = document.querySelector('#target');

inputBox.placeholder = '문구를 입력해주세요.';

addBtn.addEventListener('click', () => {
  let ul = document.querySelector('.list');
  let li = document.createElement('li');

  ul.appendChild(li);
  li.textContent = inputBox.value;

  let removeBtn = document.createElement('button');
  li.appendChild(removeBtn);
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });

  inputBox.value = '';
  inputBox.focus();
});

removeTargetBtn.addEventListener('click', () => {
  target.remove();
});

addBeforeBtn.addEventListener('click', () => {
  let ul = document.querySelector('.list');
  let li = document.createElement('li');

  ul.insertBefore(li, target);
  li.textContent = inputBox.value;

  let removeBtn = document.createElement('button');
  li.appendChild(removeBtn);
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });

  inputBox.value = '';
  inputBox.focus();
});
