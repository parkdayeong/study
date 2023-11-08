// javascript strict mode
'use strict';
//indexOf, forEach
let answer = ['1', '5', '2', '6'];
let num = '1236';
let strike = 0;
let ball = 0;

answer.forEach(function (value, i) {
  const index = num.indexOf(value);
  if (index > -1) {
    //숫자가 동일할때;
    if (index === i) {
      //index도 동일할때
      strike += 1;
    } else {
      ball += 1;
    }
  }
});

console.log(`strike : ${strike}, ball : ${ball}`);

// variable
let body = document.querySelector('body');

// placeholder change
let inputBox = document.querySelector('input');
inputBox.placeholder = '문구를 입력해주세요';

// createElement
let addBtn = document.querySelector('#add');
let addBeforeBtn = document.querySelector('#before');
let removeTargetBtn = document.querySelector('#target-remove');

// createElement --- add
addBtn.addEventListener('click', function () {
  let ul = document.querySelector('.list');
  let li = document.createElement('li');

  // append ul > li
  ul.appendChild(li);
  li.textContent = inputBox.value;

  //create button .remove-btn
  let button = document.createElement('button');
  li.appendChild(button);
  button.textContent = 'X';
  button.classname = 'remove-btn';
  // remove button's parentNode
  button.addEventListener('click', function (event) {
    // console.log(event.target.parentNode);
    event.target.parentNode.remove();
  });

  inputBox.value = '';
});
// createElement --- addBefore
addBeforeBtn.addEventListener('click', function () {
  let ul = document.querySelector('.list');
  let li = document.createElement('li');
  let target = document.querySelector('#target');

  ul.insertBefore(li, target);
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  li.appendChild(button);
  button.textContent = 'X';
  button.className = 'remove-btn';

  button.addEventListener('click', function (event) {
    event.target.parentNode.remove();
  });

  inputBox.value = '';
});

// addEventListener

let rect = document.querySelector('.rect');
let circle = document.querySelector('.circle');

// body.addEventListener('click', function (event) {
//   circle.style.left = event.pageX - 15 + 'px';
//   circle.style.top = event.pageY - 15 + 'px';
// });

let i = 0;
let colors = ['red', 'green', 'blue'];
rect.addEventListener('click', function () {
  rect.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
});

//function dayNighthandler -- refactioring -- object refactioring

let Links = {
  setColor: function (color) {
    let alist = document.querySelectorAll('a');
    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i++;
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
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('red');
  }
}
