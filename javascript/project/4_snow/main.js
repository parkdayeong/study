'use strict';

const createSnow = () => {
  const el = document.createElement('div');
  el.classList.add('snow');
  el.style.marginLeft = randomPosition() + 'px';
  document.body.appendChild(el);
};

const randomPosition = () => {
  return Math.floor(Math.random() * window.innerWidth);
};

for (let i = 0; i < 200; i++) {
  createSnow();
}

createSnow();
createSnow();
createSnow();
