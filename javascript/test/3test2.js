/* strict mode */
'use strict';

/**
 * @todo 메모
 * @deprecated 이거쓰지마세요
 *
 */
/**
 * 함수
 * @param {string} name 사람이름
 * @param {number} age 나이
 * @returns 두값을 합쳐서 문자로 뱉음
 *
 */

function hello(name, age) {
  return name + age;
}

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
