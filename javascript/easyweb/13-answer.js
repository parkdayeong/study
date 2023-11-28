'use stict';

// variable
let sliderWrapper = document.querySelector('.container');
let sliderContainer = document.querySelector('.slider-container');
// let slides = document.querySelectorAll('.slide');
let slides = document.getElementsByClassName('slide');
let slideCount = slides.length;
let currentIndex = 0; // slide순서
let topHeight = 0; // 제일높은 slide 높이
let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');

// console.log(slides);

/**
 * function calculateTallestSlide
 * 슬라이드 높이 확이하여 부모의 높이로 지정하기
 */
const calculateTallestSlide = () => {
  // let topHeights = [];
  for (let i = 0; i < slideCount; i++) {
    // topHeights.push(slides[i].offsetHeight);
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  // console.log(topHeight);
  // topHeight = Math.max(...topHeights);
  // console.log(topHeight);
  sliderWrapper.style.height = topHeight + 'px';
  sliderContainer.style.height = topHeight + 'px';
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
 * function goToSlide()
 * 슬라이드 이동 함수
 * sliderContainer 에 %로 left값 추가
 * animated class추가하여 이동하는 모습보이도록
 */

const goToSlide = (idx) => {
  sliderContainer.style.left = idx * -100 + '%';
  sliderContainer.classList.add('animated');
  currentIndex = idx;

  // updateNav();
};
// goToSlide(2);

/**
 * 버튼기능 업데이트 함수
 * 처음슬라이드에는 이전버튼 사라지게
 * 마지막슬라이드에는 다음버튼 사라지게
 */
const updateNav = () => {
  if (currentIndex === 0) {
    btnPrev.classList.add('disabled');
  } else {
    btnPrev.classList.remove('disabled');
  }
  if (currentIndex === slideCount - 1) {
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
  // 기본기능 없애기
  e.preventDefault();
  if (currentIndex === slideCount - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
});

btnPrev.addEventListener('click', (e) => {
  // 기본기능 없애기
  e.preventDefault();
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
