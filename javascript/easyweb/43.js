'use strict';

//variable
const slider = document.querySelector('#slider');
const pagniationContainer = document.createElement('div');
const slides = document.querySelectorAll('.slide');

//fuction initSlider()
initSlider();
function initSlider() {
  pagniationContainer.className = 'pagination';
  slider.prepend(pagniationContainer);

  //슬라이드 갯수 파악하여 갯수만큼 input radio 생성
  for (let i = slides.length; i > 0; i--) {
    // console.log(i);
    let radioBtn = document.createElement('input');

    radioBtn.type = 'radio';
    radioBtn.name = 'slide-radios';
    radioBtn.className = 'slide-radio';
    radioBtn.id = `slide-radio-${i}`;

    // 첫번째 라디오버튼 활성화
    if (i == 1) radioBtn.checked = true;

    slider.prepend(radioBtn);

    // label 생성하기
    let label = document.createElement('label');
    label.setAttribute('for', `slide-radio-${i}`);
    // label.innerHTML = i;
    pagniationContainer.prepend(label);
  }

  // console.log(slider);
}

// 자동슬라이드

let autoRun = undefined;
autoSlide();
function autoSlide() {
  autoRun = setInterval(changeSlide, 4000);
}
changeSlide();
function changeSlide() {
  let slideBtns = [...document.querySelectorAll('.slide-radio')];
  let currentIndex = slideBtns.findIndex((sb) => sb.checked);
  slideBtns[(currentIndex + 1) % slideBtns.length].checked = true;
}

pagniationContainer.addEventListener('mouseenter', () => {
  clearInterval(autoRun);
});

pagniationContainer.addEventListener('mouseleave', autoSlide);
