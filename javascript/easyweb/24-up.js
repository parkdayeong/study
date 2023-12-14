'use strict';

let $sliderWrapper = document.querySelector('.slider-wrapper');
let $sliderContainer = document.querySelector('.slider-container');
let $slides = document.querySelectorAll('.slide');

let $btnPrev = document.querySelector('#prev');
let $btnNext = document.querySelector('#next');

let $currentIdx = 0;
let $topHeight = 0;

let $timer = undefined;

let $pagerWrapper = document.querySelector('.pager');
let $pagerHtml = '';

/** function caculateSlideHeight
 * 슬라이드 높이중 가장 높은 값을 부모에게 할당하기
 */
function caculateSlideHeight() {
  for (let i = 0; i < $slides.length; i++) {
    if ($slides[i].offsetHeight > $topHeight) {
      $topHeight = $slides[i].offsetHeight;
    }
  }
  $sliderWrapper.style.height = $topHeight + 'px';
  $sliderContainer.style.height = $topHeight + 'px';
}

caculateSlideHeight();

/** function slidesSort
 * 슬라이드 순서대로 가로로 정렬하기
 */
function slidesSort() {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.left = i * 100 + '%';
  }
}
slidesSort();

/**
 * pagerbtns 자동생성
 */

for (let i = 0; i < $slides.length; i++) {
  $pagerHtml += `<span data-idx="${i}">${i}</span>`;
  $pagerWrapper.innerHTML = $pagerHtml;
}
let $btnPagers = document.querySelectorAll('.pager span');

/** function goToSlide
 *  슬라이드 이동함수
 */

function goToSlide(idx) {
  $sliderContainer.style.left = idx * -100 + '%';
  $currentIdx = idx;
  $sliderContainer.classList.add('animated');
  btnUpdate();
  for (let i = 0; i < $btnPagers.length; i++) {
    $btnPagers[i].classList.remove('active');
  }
  $btnPagers[idx].classList.add('active');
}

/** function btnUpdate */

function btnUpdate() {
  if ($currentIdx === 0) {
    $btnPrev.style.display = 'none';
  } else {
    $btnPrev.style.display = 'block';
  }
  if ($currentIdx === $slides.length - 1) {
    $btnNext.style.display = 'none';
  } else {
    $btnNext.style.display = 'block';
  }
}

/** btn click event */

$btnNext.addEventListener('click', (e) => {
  e.preventDefault();
  if ($currentIdx === $slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide($currentIdx + 1);
  }
});

$btnPrev.addEventListener('click', (e) => {
  e.preventDefault();
  if ($currentIdx === 0) {
    goToSlide($slides.length - 1);
  } else {
    goToSlide($currentIdx - 1);
  }
});

/** function autoSlide */

function autoSlide() {
  $timer = setInterval(() => {
    let nextSlide = ($currentIdx + 1) % $slides.length;
    goToSlide(nextSlide);
  }, 1000);
}

autoSlide();

/** mouseenter,mouseleave event */
$sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval($timer);
});

$sliderWrapper.addEventListener('mouseleave', () => {
  autoSlide();
});

/** pager click event */

for (let i = 0; i < $btnPagers.length; i++) {
  $btnPagers[i].addEventListener('click', () => {
    let $pagerNum = $btnPagers[i].getAttribute('data-idx');
    goToSlide($pagerNum - 1);
  });
}

/** 첫화면 */
goToSlide(0);
