'use strict';

// variable
let sliderWrapper = document.querySelector('.slider-wrapper');
let sliderContainer = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slide');
let currentIdx = 0;
let topHeight = 0;
let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');

/**
 * function calculateTallestSlide
 * 각 슬라이드 높이 확인하여 가장 높이가 큰 슬라이드높이로 부모의 높이 지정하기
 */

// ---- 기존문법 ----- //

// function calculateTallestSlide() {
//   for (let i = 0; i < slides.length; i++) {
//     if (slides[i].offsetHeight > topHeight) {
//       topHeight = slides[i].offsetHeight;
//     }
//   }
//   sliderWrapper.style.height = topHeight + 'px';
//   sliderContainer.style.height = topHeight + 'px';
// }

// ---- es6문법 ---- //
const calculateTallestSlide = () => {
  for (let slide of slides) {
    if (slide.offsetHeight > topHeight) {
      topHeight = slide.offsetHeight;
    }
  }
  sliderWrapper.style.height = topHeight + 'px';
  sliderContainer.style.height = topHeight + 'px';
};

calculateTallestSlide();

/**
 * function slidesLeft
 * 각슬라이드를 가로로 배열하기(0-- 100% -- 200% ...)
 * */

// -- 기본문법 --- //

// function slidesLeft() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.left = i * 100 + '%';
//   }
// }

// --- es6 문법 --- //

const slidesLeft = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = i * 100 + '%';
  }
};

slidesLeft();

/**
 *
 * function goToSlide()
 * 슬라이드 이동 함수
 * sliderContainer 에 %로 left값 추가
 * animated class추가하여 이동하는 모습보이도록
 */

const goToSlide = (idx) => {
  sliderContainer.style.left = idx * -100 + '%';
  currentIdx = idx;
  sliderContainer.classList.add('animated');
  updateNav();
};

// goToSlide(2);

/**
 * 버튼기능 업데이트 함수 updateNav
 * 처음슬라이드에는 이전버튼 사라지게
 * 마지막슬라이드에는 다음버튼 사라지게
 */

const updateNav = () => {
  if (currentIdx === 0) {
    btnPrev.classList.add('disabled');
  } else {
    btnPrev.classList.remove('disabled');
  }

  if (currentIdx === slides.length - 1) {
    btnNext.classList.add('disabled');
  } else {
    btnNext.classList.remove('disabled');
  }
};

/**
 * 버튼을 클릭하면 슬라이드 이동시키는 함수
 * a 기본기능없애기
 * 첫슬라이드에서 이전버튼 클릭시 맨뒤슬라이드로 이동
 * 맨뒤 슬라이드에서 다음버튼 클릭시 맨앞 슬라이드로 이동
 *
 */

btnNext.addEventListener('click', (e) => {
  e.preventDefault();
  // goToSlide(currentIdx + 1);
  if (currentIdx === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIdx + 1);
  }
});

btnPrev.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentIdx === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentIdx - 1);
  }
});

/**
 * 첫번째 슬라이드 먼저 보이도록하기
 */

goToSlide(0);
