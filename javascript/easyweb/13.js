'use stict';

// variable

let sliderWrapper = document.querySelector('.container');
let sliderContainer = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slide');
let slideCount = slides.length;
let slideTopHeight = 0;
let currentIndex = 0;
let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');

/**
 * function calculateTallestSlide
 * 슬라이드 높이 확이하여 부모의 높이로 지정하기
 */
const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > slideTopHeight) {
      slideTopHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = slideTopHeight + 'px';
  sliderContainer.style.height = slideTopHeight + 'px';
};

calculateTallestSlide();
/**
 * function slidesLeft
 * 각슬라이드를 가로로 배열하기(0-- 100% -- 200% ...) */

const slidesLeft = () => {
  for (let i = 0; i < slideCount; i++) {
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
  currentIndex = idx;
  sliderContainer.classList.add('animated');
};

/**
 * 버튼기능 업데이트 함수 updateNav
 * 처음슬라이드에는 이전버튼 사라지게
 * 마지막슬라이드에는 다음버튼 사라지게
 */

/**
 * 버튼을 클릭하면 슬라이드 이동시키는 함수
 * a 기본기능없애기
 * 첫슬라이드에서 이전버튼 클릭시 맨뒤슬라이드로 이동
 * 맨뒤 슬라이드에서 다음버튼 클릭시 맨앞 슬라이드로 이동
 *
 */

btnNext.addEventListener('click', (e) => {
  e.preventDefault();
  // goToSlide(currentIndex + 1);
  if (currentIndex === slideCount - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
});

btnPrev.addEventListener('click', (e) => {
  e.preventDefault();
  // goToSlide(currentIndex - 1);
  if (currentIndex === 0) {
    goToSlide(slideCount - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
});

/**
 * 첫번째 슬라이드 먼저 보이도록하기
 */
goToSlide(0);
