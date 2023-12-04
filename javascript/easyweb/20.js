/** Strict Mode */
'use strict';

/** variable */
let gallerys = document.querySelectorAll('.gallery li a img');
let lightboxOverlay = document.querySelector('#lightbox-overlay');

let lightboxImg = document.querySelector('#lightbox-overlay img');

for (let i = 0; i < gallerys.length; i++) {
  gallerys[i].addEventListener('click', (e) => {
    // 기본 속성 없애기
    e.preventDefault();
    lightboxOverlay.classList.add('visible');
    let dataLightbox = gallerys[i].getAttribute('data-lightbox');
    lightboxImg.setAttribute('src', dataLightbox);
  });
}

lightboxImg.addEventListener('click', () => {
  lightboxOverlay.classList.remove('visible');
});

// let btnPrev = document.querySelector('#prev');
// let btnNext = document.querySelector('#next');

// for (let i = 1; i < gallerys.length; i++) {
//   btnNext.addEventListener('click', () => {
//     let nextDataLightbox = gallerys[i].getAttribute('data-lightbox');
//     lightboxImg.setAttribute('src', nextDataLightbox);
//   });
// }
