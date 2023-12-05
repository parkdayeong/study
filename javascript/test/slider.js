'use strict';

// variable
let $sliderWrapper = document.querySelector('.slider-wrapper');
let $sliderContainer = document.querySelector('.slider-container');
let $slides = document.querySelectorAll('.slide');
let $nextBtn = document.querySelector('#next');
let $prevBtn = document.querySelector('#prev');
let $currentIdx = 0;
let $topHeight = 0;
let $timer = undefined;
// let $pagerBtns = document.querySelectorAll('.pager span');
let $pager = document.querySelector('.pager');
let $pagerList = '';

// function caculateSlideHeight
function caculateSlideHeight() {
  for (let i = 0; i < $slides.length; i++) {
    if ($slides[i].offsetHeight > $topHeight) {
      $topHeight = $slides[i].offsetHeight;
    }
  }
  $sliderWrapper.style.height = $topHeight + 'px';
  $sliderContainer.style.height = $topHeight + 'px';
}

caculateSlideHeight();

// function slidesLeft
function slidesLeft() {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.left = i * 100 + '%';
    $pagerList += `<span></span>`;
    $pager.innerHTML = $pagerList;
  }
}
slidesLeft();

// function goToSlide
function goToSlide(idx) {
  $sliderContainer.classList.add('animated');
  $sliderContainer.style.left = idx * -100 + '%';
  $currentIdx = idx;
  updateBtn();
  for (let x = 0; x < $pagerBtns.length; x++) {
    $pagerBtns[x].classList.remove('active');
  }
  $pagerBtns[idx].classList.add('active');
}

let $pagerBtns = document.querySelectorAll('.pager span');
// function updateBtn
function updateBtn() {
  if ($currentIdx === 0) {
    $prevBtn.style.display = 'none';
  } else {
    $prevBtn.style.display = 'block';
  }
  if ($currentIdx === $slides.length - 1) {
    $nextBtn.style.display = 'none';
  } else {
    $nextBtn.style.display = 'block';
  }
}

// btn click event
$nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if ($currentIdx === $slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide($currentIdx + 1);
  }
});

$prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if ($currentIdx === 0) {
    goToSlide($slides.length - 1);
  } else {
    goToSlide($currentIdx - 1);
  }
});

// function autoSlide

function autoSlide() {
  $timer = setInterval(() => {
    let $nextIdx = ($currentIdx + 1) % $slides.length;
    goToSlide($nextIdx);
  }, 1000);
}
autoSlide();

// function stopSlide

function stopSlide() {
  clearInterval($timer);
}

// mouseenter,mouseleave event
$sliderWrapper.addEventListener('mouseenter', () => {
  stopSlide();
});
$sliderWrapper.addEventListener('mouseleave', () => {
  autoSlide();
});

// pagerBtns 클릭시 해당 페이지로 이동하기

for (let i = 0; i < $pagerBtns.length; i++) {
  $pagerBtns[i].addEventListener('click', (e) => {
    goToSlide(i);
  });
}

// 처음으로 고정
goToSlide(0);
