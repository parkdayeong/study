// strict mode
'use strict';

/* calculator */
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');
let result = document.querySelector('#result');

/* strike,ball */
let strike = 0;
let ball = 0;
let answer = ['1', '5', '2', '8'];
let num = '5124';

answer.forEach(function (value, i) {
  let index = num.indexOf(value);
  if (index > -1) {
    if (index == i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
});

// for (let i = 0; i < answer.length; i++) {
//   let index = num.indexOf(answer[i]);
//   if (index > -1) {
//     if (index == i) {
//       strike += 1;
//     } else {
//       ball += 1;
//     }
//   }
// }

/* create Element */
// variable
let body = document.querySelector('body');
let rect = document.querySelector('.rect');
let circle = document.querySelector('.circle');

let colors = ['red', 'orange', 'blue'];
let i = 0;

let beforeBtn = document.querySelector('#before');
let addBtn = document.querySelector('#add');
let removeTargetBtn = document.querySelector('#target-remove');

let inputBox = document.querySelector('input');

// createElemnet

inputBox.placeholder = '문구를 입력하세요.';

addBtn.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  li.appendChild(button);
  button.textContent = 'X';

  button.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });

  inputBox.value = '';
});

beforeBtn.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let target = document.querySelector('#target');
  ul.insertBefore(li, target);
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  li.appendChild(button);
  button.textContent = 'X';

  button.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });
});
let removeBtn = document.querySelector('.remove-btn');
removeTargetBtn.addEventListener('click', () => {
  removeBtn.parentNode.remove();
});
removeBtn.addEventListener('click', (event) => {
  event.target.parentNode.remove();
});
// addEventListener
rect.addEventListener('click', (event) => {
  rect.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
});

// body.addEventListener('click', (event) => {
//   circle.style.left = event.pageX + 'px';
//   circle.style.top = event.pageY + 'px';
// });

// function dayNightHandler --> refactoring Object

let Links = {
  setColor: function (color) {
    let alinks = document.querySelectorAll('a');
    let i = 0;
    while (i < alinks.length) {
      alinks[i].style.color = color;
      i = i + 1;
    }
  },
};

let Body = {
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
};

function dayNightHandler(self) {
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue');
    self.value = 'day';
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('red');
    self.value = 'night';
  }
}
