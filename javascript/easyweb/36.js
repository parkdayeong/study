let galleryContainer = document.querySelector('.gallery-container');
let gallerys = document.querySelectorAll('.gallery img');
let lightboxOverlay = document.querySelector('#lightbox-overlay');
let lightboxOverlayImg = document.querySelector('#lightbox-overlay img');
let selectImgdata = '';

for (let gallery of gallerys) {
  gallery.addEventListener('click', (e) => {
    e.preventDefault();
    lightboxOverlay.classList.add('visible');
    selectImgdata = gallery.getAttribute('data-lightbox');
    lightboxOverlayImg.setAttribute('src', selectImgdata);
  });
}

lightboxOverlay.addEventListener('click', (e) => {
  // e.preventDefault();
  lightboxOverlay.classList.remove('visible');
});
