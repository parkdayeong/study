'use strict';

/** variable */
let $sliderWrapper = document.querySelector('.slider-wrapper');
let $sliderContainer = document.querySelector('.slider-container');
let $slides = document.querySelectorAll('.slide');

let $btnPrev = document.querySelector('#prev');
let $btnNext = document.querySelector('#next');

let $currentIdx = 0;
let $topHeight = 0;

let $timer = undefined;

let $pagerWrap = document.querySelector('.pager');
let $pagerhtml = '';

/** function slideHeight
 * 각 슬라이드 높이중 가장 높은 값
 * 부모 높이에 할당하기
 */

function slideHeight() {
  for (let i = 0; i < $slides.length; i++) {
    if ($slides[i].offsetHeight > $topHeight) {
      $topHeight = $slides[i].offsetHeight;
    }
  }
  $sliderWrapper.style.height = $topHeight + 'px';
  $sliderContainer.style.height = $topHeight + 'px';
}

slideHeight();

/** function slideLeft
 * 슬라이드 순서대로 옆으로 배치하기
 */

function slideLeft() {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.left = i * 100 + '%';
  }
}
slideLeft();

/** 자동 pager생성 */
for (let i = 0; i < $slides.length; i++) {
  $pagerhtml += `<span data-idx="${i}">${i}</span>`;
}
$pagerWrap.innerHTML = $pagerhtml;
console.log($pagerWrap);
let $pagers = document.querySelectorAll('.pager span');
/** function goToSlide
 * 슬라이드 이동함수
 */

function goToSlide(idx) {
  $sliderContainer.style.left = idx * -100 + '%';
  $currentIdx = idx;
  $sliderContainer.classList.add('animated');
  btnUpdate();

  for (let x = 0; x < $pagers.length; x++) {
    $pagers[x].classList.remove('active');
  }
  $pagers[idx].classList.add('active');
}

/**
 * function btnUpdate
 */

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

/**
 * btn click event
 */

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

/** function autoSlide
 * 자동슬라이드
 */

function autoSlide() {
  $timer = setInterval(function () {
    let nextSlide = ($currentIdx + 1) % $slides.length;
    goToSlide(nextSlide);
  }, 1000);
}
autoSlide();

$sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval($timer);
});
$sliderWrapper.addEventListener('mouseleave', () => {
  autoSlide();
});

/** pager 클릭시 이동 */
for (let i = 0; i < $pagers.length; i++) {
  $pagers[i].addEventListener('click', (e) => {
    let $pageNum = e.target.getAttribute('data-idx');
    goToSlide($pageNum);
  });
}
/**
 * 기본화면
 */

goToSlide(0);
