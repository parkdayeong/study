'use strict';

const $wrapper = document.querySelector('.wrapper'),
  $carousel = document.querySelector('.carousel');

let isDragStart = false;

function dragStart(e) {
  isDragStart = true;
}

function dragger(e) {
  e.preventDefault();
  if (!isDragStart) return;
  $carousel.scrollLeft = e.pageX;
}

function dragStop(e) {
  isDragStart = false;
}

$carousel.addEventListener('mousedown', dragStart);
$carousel.addEventListener('mousemove', dragger);
$carousel.addEventListener('mouseup', dragStop);
