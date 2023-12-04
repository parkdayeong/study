'use strict';

//variable

const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';

for (const link of links) {
  const img = new Image();
  img.src = link.dataset.bg;
  // console.log(img);
  link.addEventListener('mouseenter', () => {
    bg.style.backgroundImage = `url(${img.src})`;
    document.body.classList.add(showClass);
  });
  link.addEventListener('mouseleave', () => {
    document.body.classList.remove(showClass);
  });
} // for 반복문
