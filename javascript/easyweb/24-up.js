'use strict';

const $sliderWrapper = document.querySelector('.slider-wrapper'),
  $sliderContainer = document.querySelector('.slider-container'),
  $btnPrev = document.querySelector('#prev'),
  $btnNext = document.querySelector('#next');

let $slides = document.querySelectorAll('.slide'),
  $currentIdx = 0,
  $topHeight = 0,
  $timer = 0,
  $pager = document.querySelector('.pager'),
  $pagerHTML = '';
/** function sliderHeight()
 * 각  slide의 높이값중 가장 높은값 확인하여
 * slider부모에 할당하기
 */
sliderHeight();
function sliderHeight() {
  for (let i = 0; i < $slides.length; i++) {
    if ($slides[i].offsetHeight > $topHeight) {
      $topHeight = $slides[i].offsetHeight;
    }
  }
  $sliderContainer.style.height = $topHeight + 'px';
  $sliderWrapper.style.height = $topHeight + 'px';
}

/** function slidesSort()
 * 각 슬라이드 가로 정렬하기
 */
slidesSort();
function slidesSort() {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.left = i * 100 + '%';
  }
}

/** slide갯수만큼 pagerbtn 생성하기 */
for (let i = 0; i < $slides.length; i++) {
  $pagerHTML += `<span data-idx="${i}">${i}</span>`;
  $pager.innerHTML = $pagerHTML;
}

let $pagerbtns = document.querySelectorAll('.pager span');
/** function goToSlide()
 * 슬라이드 이동 함수
 */

function goToSlide(idx) {
  $sliderContainer.style.left = idx * -100 + '%';
  $currentIdx = idx;
  $sliderContainer.classList.add('animated');
  btnUpdate();
  for (let i = 0; i < $slides.length; i++) {
    $pagerbtns[i].classList.remove('active');
  }
  $pagerbtns[idx].classList.add('active');
}

/** function btnUpdate()
 * 버튼 업데이트 함수
 */
function btnUpdate() {
  if ($currentIdx === 0) {
    $btnPrev.style.display = ' none';
  } else {
    $btnPrev.style.display = 'block';
  }
  if ($currentIdx === $slides.length - 1) {
    $btnNext.style.display = 'none';
  } else {
    $btnNext.style.display = 'block';
  }
}

/** prev,next btn click event */
$btnPrev.addEventListener('click', (e) => {
  e.preventDefault();
  if ($currentIdx === 0) {
    goToSlide($slides.length - 1);
  } else {
    goToSlide($currentIdx - 1);
  }
});

$btnNext.addEventListener('click', (e) => {
  e.preventDefault();
  if ($currentIdx === $slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide($currentIdx + 1);
  }
});

/** function autoSlide()
 * 자동슬라이드 함수
 */
autoSlide();
function autoSlide() {
  $timer = setInterval(() => {
    let $nextIdx = ($currentIdx + 1) % $slides.length;
    goToSlide($nextIdx);
  }, 1000);
}

$sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval($timer);
});
$sliderWrapper.addEventListener('mouseleave', autoSlide);

/** pager */

for (let i = 0; i < $pagerbtns.length; i++) {
  $pagerbtns[i].addEventListener('click', () => {
    let $pagerNum = $pagerbtns[i].dataset.idx;
    goToSlide($pagerNum - 1);
  });
}

/** init */
goToSlide(0);
