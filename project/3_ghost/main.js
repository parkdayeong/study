'use strict';

let body = document.querySelector('body');
let ghost = document.querySelector('.ghost');

body.addEventListener('mousemove', (e) => {
  ghost.style.left = e.pageX + 'px';
  ghost.style.top = e.pageY + 'px';
});
