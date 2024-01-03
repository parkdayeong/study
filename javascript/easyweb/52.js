'use strict';

let slides = document.querySelector('.slides'),
  slide = document.querySelectorAll('.slides li'),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 200,
  slideMargin = 30,
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');

makeClone();
function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    // a.cloneNode(), a.cloneNode(true) ==> 자식요소까지복사
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    // a.appendChild(b)
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    // a.prepend(b)
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slides.classList.add('animated');
  }, 100);
}

function updateWidth() {
  let currentSlides = document.querySelectorAll('.slides li');
  let newSlideCount = currentSlides.length;

  let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}

function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  // .slides{transform:translateX(-1000px)}
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
  // console.log(initialTranslateValue);
}

nextBtn.addEventListener('click', function () {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener('click', function () {
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  console.log(currentIdx, slideCount);

  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slides.classList.add('animated');
    }, 600);
  }
}
