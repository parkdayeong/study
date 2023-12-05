'use strict';

//----------------- variable
let $sliderWrapper = document.querySelector('.slider-wrapper');
let $sliderContainer = document.querySelector('.slider-container');
let $slides = document.querySelectorAll('.slide');
let $btnNext = document.querySelector('#next');
let $btnPrev = document.querySelector('#prev');
let $currentIdx = 0;
let $topHeight = 0;
let $timer = undefined;

/**-----------------
 * function calculateTallestSlide
 * 각 슬라이드 높이 확인하여 가장 높이가 큰 슬라이드높이로 부모의 높이 지정하기
 */

const calculateTallestSlide = () => {
  for (let $slide of $slides) {
    if ($slide.offsetHeight > $topHeight) {
      $topHeight = $slide.offsetHeight;
    }
  }
  $sliderWrapper.style.height = $topHeight + 'px';
  $sliderContainer.style.height = $topHeight + 'px';
};

calculateTallestSlide();

// /**----------------
//  * function slidesLeft
//  * 각슬라이드를 가로로 배열하기(0-- 100% -- 200% ...)
//  * */

// const slidesLeft = () => {
//   for (let i = 0; i < $slides.length; i++) {
//     $slides[i].style.left = i * 100 + '%';
//   }
// };

// slidesLeft();

// /**----------------
//  * function goToSlide()
//  * 슬라이드 이동 함수
//  * sliderContainer 에 %로 left값 추가
//  * animated class추가하여 이동하는 모습보이도록
//  */

// const goToSlide = (idx) => {
//   $sliderContainer.classList.add('animated');
//   $sliderContainer.style.left = idx * -100 + '%';
//   $currentIdx = idx;
//   updateNav();
// };

// /**
//  * 버튼기능 업데이트 함수 updateNav
//  * 처음슬라이드에는 이전버튼 사라지게
//  * 마지막슬라이드에는 다음버튼 사라지게
//  */

// function updateNav() {
//   if ($currentIdx === 0) {
//     $btnPrev.style.display = 'none';
//   } else {
//     $btnPrev.style.display = 'block';
//   }
//   if ($currentIdx === $slides.length - 1) {
//     $btnNext.style.display = 'none';
//   } else {
//     $btnNext.style.display = 'block';
//   }
// }

// /**
//  * 버튼을 클릭하면 슬라이드 이동시키는 함수
//  * a 기본기능없애기
//  * 첫슬라이드에서 이전버튼 클릭시 맨뒤슬라이드로 이동
//  * 맨뒤 슬라이드에서 다음버튼 클릭시 맨앞 슬라이드로 이동
//  *
//  */
// $btnNext.addEventListener('click', (e) => {
//   // e 기본 기능 없애기
//   e.preventDefault();
//   // 클릭시 하나씩 뒤로
//   // goToSlide($currentIdx + 1);
//   if ($currentIdx === $slides.length - 1) {
//     goToSlide(0);
//   } else {
//     goToSlide($currentIdx + 1);
//   }
// });

// $btnPrev.addEventListener('click', (e) => {
//   e.preventDefault();
//   // 클릭시 하나씩 앞으로
//   if ($currentIdx === 0) {
//     goToSlide($slides.length - 1);
//   } else {
//     goToSlide($currentIdx - 1);
//   }
// });

// // 자동슬라이드 function startAutoSlide
// // 4초마다 goToSlide(숫자);
// // setInterval(할일, 시간)
// // 함수 = 할일 = function(){실제할일}
// // 실제할일 = goToslide(숫자); 0, 1, 2, 3, 4 ...5, 0

// function startAutoSlide() {
//   $timer = setInterval(() => {
//     let $nextIdx = ($currentIdx + 1) % $slides.length;
//     goToSlide($nextIdx);
//   }, 1000);
// }

// startAutoSlide();

// // 사용자가 들어오면 setInterval 멈추기
// // clearInterval(대상)
// /*
// sliderWrapper에 마우스가 들어오면 할일, 나가면 할일
// */

// $sliderWrapper.addEventListener('mouseenter', () => {
//   clearInterval($timer);
// });

// $sliderWrapper.addEventListener('mouseleave', () => {
//   startAutoSlide();
// });

// /**
//  * 첫번째 슬라이드 먼저 보이도록하기
//  */
// goToSlide(0);
