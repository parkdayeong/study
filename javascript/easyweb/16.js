'use strict';

// variable
let panelWraps = document.querySelectorAll('.panel-question');
let questions = document.querySelectorAll('.panel-heading');
let answers = document.querySelectorAll('.panel-body');

let btnCollapseAll = document.querySelector('#btn-collapse');

/**
 * 제목을 클릭하면 할일
 * 1.
 *
 */

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', (e) => {
    for (let j = 0; j < answers.length; j++) {
      questions[j].parentNode.classList.remove('active');
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
  for (let i = 0; i < answers.length; i++) {
    answers[i].style.display = 'none';

    let activePanel = document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display = 'block';
  }
};

activateBody();

/** collapse All 버튼을 클릭하면 모든 body안보이도록 */

btnCollapseAll.addEventListener('click', () => {
  for (let i = 0; i < answers.length; i++) {
    answers[i].style.display = 'none';
  }
});
