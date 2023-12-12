'use strict';

let numAnimation = document.querySelectorAll('.num_animation');
// numAnimation.innerText = numAnimation.getAttribute('data-rate');
// let num = 0;
// let targetNum = numAnimation.getAttribute('data-rate');
// let timer = setInterval(function () {
//   ++num;
//   numAnimation.innerHTML = num;
//   if (num === parseInt(targetNum)) {
//     clearInterval(timer);
//   }
// }, 1);

for (let i = 0; i < numAnimation.length; i++) {
  let num = 0;
  let targetNum = numAnimation[i].getAttribute('data-rate');
  let intervalTime = 100;
  if (targetNum > 500) {
    intervalTime = 1;
  }

  let timer = setInterval(function () {
    ++num;
    numAnimation[i].innerHTML = num;
    if (num == targetNum) {
      clearInterval(timer);
    }
  }, intervalTime);
}
