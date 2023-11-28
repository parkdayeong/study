'use strict';

//variable
let btnCollapse = document.querySelector('#btn-collapse');
let btnPanelsHeading = document.querySelectorAll('.panel-heading');
// let btnPanelsHeading = document.getElementsByClassName('panel-heading');
let question = document.querySelectorAll('.panel-question');
let panelsBody = document.querySelectorAll('.panel-body');

console.log(btnPanelsHeading.length);

/**
 * 제목을 클릭하면 할일
 */
for (let i = 0; i < btnPanelsHeading.length; i++) {
  btnPanelsHeading[i].addEventListener('click', (e) => {
    for (let j = 0; j < question.length; j++) {
      question[j].classList.remove('active');
      e.target.parentNode.classList.add('active');
      activateBody();
    }
  });
}

/** function activateBody
 * 1. panel-body 모두안보이도록
 * 2. panel-question에 active가 있으면 자식 중
 * panel-body가 나타나도록
 *  */

const activateBody = () => {
  for (let i = 0; i < panelsBody.length; i++) {
    panelsBody[i].style.display = 'none';
  }
  let activePanel = document.querySelector('.panel-question.active .panel-body');
  activePanel.style.display = 'block';
};
activateBody();

/** collapse All 버튼을 클리갛면 모든 body안보이도록 */

btnCollapse.addEventListener('click', () => {
  for (let i = 0; i < panelsBody.length; i++) {
    panelsBody[i].style.display = 'none';
  }
});
