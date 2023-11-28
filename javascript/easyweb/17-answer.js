'use strict';

/**
 * tab-content안의 div들을 모두 안보이도록
 *
 * 링크를 클릭하면 클릭한 그 요소의 href속성의 값을 변수 tabTarget에 저장
 * 저장된 값에서 #을 삭제
 * tabTarget = tabs-1
 * document.getElementById('tabs-1').style.display ='block'
 *
 */

//variable
let targetLinks = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content div');

for (let i = 0; i < targetLinks.length; i++) {
  targetLinks[i].addEventListener('click', (e) => {
    e.preventDefault();
    let orgTarget = e.target.getAttribute('href');
    for (let x = 0; x < targetLinks.length; x++) {
      targetLinks[x].classList.remove('active');
    }
    e.target.classList.add('active');
    console.log(orgTarget);

    let tabTarget = orgTarget.replace('#', '');
    for (let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = 'none';
    }
    document.getElementById(tabTarget).style.display = 'block';
  });
}

// let tabTarget = orgTarget.replace('#', '');

// 첫번째 div 보이도록
document.getElementById('tabs-1').style.display = 'block';
