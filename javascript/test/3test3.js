/* strict mode */
'use strict';

/* calculator */

// variable
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

let resultArea = document.querySelector('#result');

// function btnsColorReset()
const btnsColorReset = () => {
  let operatorBtns = document.querySelectorAll('.operator-btn');
  operatorBtns.forEach((value) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

// refactoring function btnColorChange()
const btnColorChange = (self) => {
  self.target.style.backgroundColor = 'black';
  self.target.style.color = 'white';
};

// operator
let operator = '';
sum.addEventListener('click', (event) => {
  operator = '+';
  btnsColorReset();
  btnColorChange(event);
});

min.addEventListener('click', (event) => {
  operator = '-';
  btnsColorReset();
  btnColorChange(event);
});

multiply.addEventListener('click', (event) => {
  operator = '*';
  btnsColorReset();
  btnColorChange(event);
});

divide.addEventListener('click', (event) => {
  operator = '/';
  btnsColorReset();
  btnColorChange(event);
});

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
    if (num2 == 0) {
      resultArea.textContent = 'Error!';
      return;
    } else {
      result = num1 / num2;
    }
  } else {
    resultArea.textContent = 'Error!';
    return;
  }
  resultArea.textContent = `결과 : ${result}`;
});

/* strike,ball */

let strike = 0;
let ball = 0;
let answer = ['1', '5', '2', '8'];
let num = '5124';

answer.forEach((value, index) => {
  // console.log(index, value);
  let i = num.indexOf(value);
  // console.log(i);
  if (i > 0) {
    if ((i = index)) {
      strike += 1;
    }
    ball += 1;
  }
});

/* createElement */
let inputBox = document.querySelector('#input-text');
let addBtn = document.querySelector('#add');
let BeforeBtn = document.querySelector('#before');
let targetRemoveBtn = document.querySelector('#target-remove');

inputBox.placeholder = '문구를 입력해주세요';

addBtn.addEventListener('click', () => {
  let ul = document.querySelector('ul');
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

/* dayNightHandler */

let Links = {
  setColor: (color) => {
    let alinks = document.querySelectorAll('a');
    let i = 0;
    while (i < alinks.length) {
      alinks[i].style.color = color;
      i = i + 1;
    }
  },
};

const dayNightHandler = (self) => {
  if (self.value === 'night') {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';

    Links.setColor('powderblue');
    self.value = 'day';
  } else {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';

    Links.setColor('red');
    self.value = 'night';
  }
};

/* addEventListener */
let rect = document.querySelector('.rect');
let circle = document.querySelector('.circle');
let body = document.querySelector('body');

let colors = ['red', 'blue', 'green'];
let i = 0;
rect.addEventListener('click', (event) => {
  event.target.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
});

body.addEventListener('click', (event) => {
  circle.style.left = event.pageX - 15 + 'px';
  circle.style.top = event.pageY - 15 + 'px';
});
