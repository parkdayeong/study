'use strict';

let target = document.querySelector('#dynamic');

let setIntervalId = setInterval(() => {
  console.log('hi');
}, 1000);

setTimeout(() => {
  clearInterval(setIntervalId);
  console.log('Interval stopped');
}, 5000);
