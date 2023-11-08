// 문법제어
'use strict';
// addEventListener
// 변수선언
let rect = document.querySelector('.rect');
let circle = document.querySelector('.circle');
let body = document.querySelector('body');

// test
// console.log(rect, circle, body);

let colors = ['red', 'orange', 'green', 'blue'];
let i = 0;

// rect color control
rect.addEventListener('click', function (event) {
  event.target.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
});

// circle position control
body.addEventListener('click', function (event) {
  circle.style.left = event.pageX - 15 + 'px';
  circle.style.top = event.pageY - 15 + 'px';
});

// Set color
// dayNightHandler --- > refactoring function --- > refactoring object

var Links = {
  setColor: function (color) {
    let alist = document.querySelectorAll('a');
    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};

var Body = {
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
