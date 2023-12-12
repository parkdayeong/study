'use strict';

let numAnimation = document.querySelector('.num_animation');
// numAnimation.innerText = numAnimation.getAttribute('data-rate');
let num = 0;
let targetNum = numAnimation.getAttribute('data-rate');
let timer = setInterval(function () {
  ++num;
  numAnimation.innerHTML = num;
  if (num === parseInt(targetNum)) {
    clearInterval(timer);
  }
}, 1);
