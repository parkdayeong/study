'use strict';
initSlider();

function initSlider() {
  const sliderContainer = document.querySelector('#slider');
  // console.log(sliderContainer);
  const paginationContainer = document.createElement('div');

  //페이지네이션 생성
  paginationContainer.className = 'pagination';
  sliderContainer.prepend(paginationContainer);
  // console.log(sliderContainer);

  //슬라이드 개수 파악
  const slideCount = document.querySelectorAll('.slide').length;
  // console.log(slideCount);

  for (let i = slideCount; i > 0; i--) {
    // input 태그 생성
    let radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'slide-radios';
    radioBtn.className = 'slide-radio';
    radioBtn.id = `slide-radio-${i}`;

    if (i == 1) {
      radioBtn.checked = true;
    }
    sliderContainer.prepend(radioBtn);

    //label생성
    let label = document.createElement('label');
    label.setAttribute('for', `slide-radio-${i}`);
    label.innerHTML = i;
    paginationContainer.prepend(label);
  }

  // 자동슬라이드

  let autoRun = undefined;
  function autoSlide() {
    autoRun = setInterval(changeSlide, 1000);
  }
  autoSlide();

  function changeSlide() {
    const radioButtons = [...document.querySelectorAll('.slide-radio')];
    const currentIndex = radioButtons.findIndex((rb) => rb.checked);
    // console.log(currentIndex);
    radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
  }

  paginationContainer.addEventListener('mouseenter', () => {
    clearInterval(autoRun);
  });
  paginationContainer.addEventListener('mouseleave', autoSlide);
} // function initSlider
