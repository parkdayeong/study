'use strict';

let body = document.querySelector('body');
let ghost = document.querySelector('.ghost');

body.addEventListener('mousemove', (event) => {
  ghost.style.left = event.pageX + 'px';
  ghost.style.top = event.pageY + 'px';
});
