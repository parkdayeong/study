'use strict';

let panelQuestion = document.querySelectorAll('.panel-question');
let btnCloseAll = document.querySelector('#btn-collapse');

function closeAll() {
  for (let y = 0; y < panelQuestion.length; y++) {
    panelQuestion[y].classList.remove('active');
  }
}

for (let i = 0; i < panelQuestion.length; i++) {
  panelQuestion[i].addEventListener('click', function () {
    closeAll();
    this.classList.add('active');
  });
}

btnCloseAll.addEventListener('click', (e) => {
  e.preventDefault();
  closeAll();
});
