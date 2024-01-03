'use strict';
//variable
let slideContainer = document.querySelector('.slides'),
  slides = document.querySelectorAll('.slides li'),
  currentIdx = 0,
  slidesCount = slides.length,
  slideWidth = 200,
  slideMargin = 30,
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');

/** function makeClone()
 * slide li들 복사하여 앞뒤에 붙이기
 * updateWidth() -- li들 복사한 길이 계산해서 부모에 부여
 * setInitialPos() -- 초기값 세팅 translateX
 * setTimeout(animated class 부여)
 */

makeClone();
function makeClone() {
  //a.cloneNode() / a.cloneNode(true) ===> 자식요소까지 복사
  for (let i = 0; i < slidesCount; i++) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slideContainer.appendChild(cloneSlide);
  }

  for (let i = slidesCount - 1; i >= 0; i--) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slideContainer.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slideContainer.classList.add('animated');
  }, 100);
}

/** function updateWidth() */
function updateWidth() {
  let currentSlides = document.querySelectorAll('.slides li');
  let currentSlidesCount = currentSlides.length;

  let newWidth = (slideWidth + slideMargin) * currentSlidesCount - slideMargin;
  slideContainer.style.width = newWidth + 'px';
}

/** function setInitialPos() */
function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slideMargin) * slidesCount;
  slideContainer.style.transform = `translateX(${initialTranslateValue}px)`;
}
/** click event */
prevBtn.addEventListener('click', function () {
  moveSlide(currentIdx - 1);
});

nextBtn.addEventListener('click', function () {
  moveSlide(currentIdx + 1);
});

/** function moveSlide(num) */
function moveSlide(num) {
  slideContainer.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  console.log(currentIdx, slidesCount);

  if (currentIdx == slidesCount || currentIdx == -slidesCount) {
    setTimeout(function () {
      slideContainer.classList.remove('animated');
      slideContainer.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slideContainer.classList.add('animated');
    }, 600);
  }
}
