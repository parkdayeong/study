'use strict';

// // 클릭시 gallery-container 안에 각 이미지 data-lightbox 경로를
// // #lightbox-overlay img의 src에 넣어야함
// // class visible 추가하여 보이도록

// 다영 코드
let gallerys = document.querySelectorAll('.gallery li a img');
console.log(gallerys);
let lightboxOverlay = document.querySelector('#lightbox-overlay');
let lightboxOverlayImg = document.querySelector('#lightbox-overlay img');

for (let i = 0; i < gallerys.length; i++) {
  gallerys[i].addEventListener('click', (e) => {
    e.preventDefault();
    lightboxOverlay.classList.add('visible');
    let dataSrc = gallerys[i].getAttribute('data-lightbox');
    // console.log(dataSrc);
    lightboxOverlayImg.setAttribute('src', dataSrc);
  });
}
lightboxOverlayImg.addEventListener('click', () => {
  lightboxOverlay.classList.remove('visible');
});

let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');
let currentIdx = 0;

// // 이지웹 코드
// // - A.getAtrribute(b) = A요소의 b라는 속성을 가져옴
// // - setAtrribute
// // - A.hasAtrribute(b) = A요소의 b라는 속성이 있는지 확인한다
// // - New image
// // .onload 화면에 로드가 되면 할일

// //variable
// document.addEventListener('click', lightBox);

// /**
//  * function lightBox
//  *
//  */

// function lightBox(e) {
//   let elem = e.target;
//   let elemId = elem.getAttribute('id');
//   let ligthBoxImg = document.querySelector('#lightbox-image');
//   let lightBox = document.querySelector('#lightbox-overlay');
//   let newImg = new Image();
//   // let img = new Image();
//   // img.src = 'myimage.jpg';

//   if (elem.hasAttribute('data-lightbox')) {
//     e.preventDefault();
//     newImg.onload = function () {
//       ligthBoxImg.src = this.src;
//     };
//     // ligthBoxImg.src = '';
//     newImg.src = elem.getAttribute('data-lightbox');
//     lightBox.classList.add('visible');

//     // console.log(elem.getAttribute('data-lightbox'));
//   }
//   if (elemId == 'lightbox-overlay' || elemId == 'lightbox-image') {
//     lightBox.classList.remove('visible');
//   }

//   // console.log(ligthBoxImg);
// }
