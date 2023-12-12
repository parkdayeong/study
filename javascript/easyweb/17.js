'use strict';

// variable
let tabMenu = document.querySelector('.tab-menu');
let tabMenusHTML = '';
// let tabMenus = document.querySelectorAll('.tab-menu a');
let tabConts = document.querySelectorAll('#tab-content div');
let currentIdx = 0;
let tabWrapper = document.querySelector('.tab-wrapper');
let intervalId = undefined;

// changeContent()
function changeContent() {
  // 현재 인덱스의 메뉴 비활성화
  tabMenus[currentIdx].classList.remove('active');

  //현재 인덱스의 컨텐츠 숨김
  tabConts[currentIdx].style.display = 'none';

  //다음인덱스로 이동하기
  currentIdx = (currentIdx + 1) % tabMenus.length;

  //다음 인덱스의 메뉴 활성화
  tabMenus[currentIdx].classList.add('active');

  //다음 인덱스의 컨텐츠 표시
  tabConts[currentIdx].style.display = 'block';
}

// changeContent();

// 컨텐츠 늘어나면 메뉴 자동으로 늘어나도록

for (let i = 0; i < tabConts.length; i++) {
  tabMenusHTML += `<li><a href="#tabs-${i + 1}">menu${i + 1}</a></li>`;
  tabMenu.innerHTML = tabMenusHTML;
}
let tabMenus = document.querySelectorAll('.tab-menu a');

// 메뉴클릭시, 각 메뉴의 컨텐츠 표기
for (let i = 0; i < tabMenus.length; i++) {
  tabMenus[i].addEventListener('click', (e) => {
    e.preventDefault();
    for (let y = 0; y < tabMenus.length; y++) {
      tabMenus[y].classList.remove('active');
    }
    e.target.classList.add('active');

    let selectMenuHref = tabMenus[i].getAttribute('href');
    let selectContId = selectMenuHref.replace('#', '');

    for (let x = 0; x < tabConts.length; x++) {
      tabConts[x].style.display = 'none';
    }

    document.getElementById(selectContId).style.display = 'block';
    clearInterval(intervalId);
  });
}

tabWrapper.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

tabWrapper.addEventListener('mouseleave', () => {
  setInter();
});

// 첫번째 컨텐츠 기본 열려있도록
document.querySelector('#tabs-1').style.display = 'block';
tabMenus[0].classList.add('active');

function setInter() {
  intervalId = setInterval(changeContent, 1000);
}
setInter();
