// Stict Mode
'use strict';

/*---------------------------------------
setInterval(), clearInterval() 
----------------------------------------*/

// variable
let myBox = document.querySelector('#my_box');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let ninterId;

// function colorChange
const colorChange = () => {
  ninterId = setInterval(changeClass, 500);
};

// function changeClass
const changeClass = () => {
  myBox.className = myBox.className === 'go' ? 'stop' : 'go';
};

// function stopColorChange
const stopColorChange = () => {
  clearInterval(ninterId);
  ninterId = null;
};

// start click event
startBtn.addEventListener('click', colorChange);

// stop click event
stopBtn.addEventListener('click', stopColorChange);

/*---------------------------------------
even or odd
----------------------------------------*/

// variable
let numberBox = document.querySelector('#number-box');
let evenOrOddBtn = document.querySelector('#even-or-odd-btn');
let resultArea = document.querySelector('#result');
let even = document.querySelector('.even');
let odd = document.querySelector('.odd');
let intervlId;

// function
evenOrOddBtn.addEventListener('click', () => {
  let num = parseFloat(numberBox.value);
  let i = 0;
  if (num % 2 === 0) {
    even.style.color = 'red';
    odd.style.color = 'black';
  } else if (num % 2 === 1) {
    even.style.color = 'black';
    odd.style.color = 'red';
  } else {
    blinkClass(i);
    numberBox.placeholder = '숫자를 입력해주세요';
  }
});

// function blinkClass
const blinkClass = (i) => {
  intervlId = setInterval(() => {
    toggleClass();
    i = i + 1;
    if (i === 10) {
      clearInterval(intervlId);
    }
  }, 500);
};

// function toggleClass
const toggleClass = () => {
  resultArea.classList.toggle('txt-line');
};

/*---------------------------------------
login
----------------------------------------*/

// variable
let emailBox = document.querySelector('#email');
let passwordBox = document.querySelector('#password');
let loginBtn = document.querySelector('#login');
let resultArea1 = document.querySelector('#result-area1');

loginBtn.addEventListener('click', () => {
  let email = emailBox.value;
  let password = passwordBox.value;

  if (email === '' || email.includes('@') === false) {
    resultArea1.textContent = '이메일이 유효하지않습니다.';
    resultArea1.classList.add('txt-color-red');
  } else if (!password) {
    resultArea1.textContent = '비밀번호를 입력해주세요';
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    resultArea1.textContent = '비밀번호는 8~ 16자리입니다.';
  } else {
    resultArea1.textContent = '로그인성공';
  }
});
