'use strict';

//variable
let tabWrapper = document.querySelector('.tab-wrapper');
let tabMenu = document.querySelector('.tab-menu');
let tabMenusWrap = '';
let currentIdx = 0;
let tabConts = document.querySelectorAll('#tab-content div');
let intervalId = undefined;

// 자동슬라이드 세팅

function changeMenu() {
  //현재 인덱스 메뉴 비활성화
  tabMenus[currentIdx].classList.remove('active');
  //현제 인덱스 컨텐츠 비활성화
  tabConts[currentIdx].style.display = 'none';
  //인덱스 더하기
  currentIdx = (currentIdx + 1) % tabMenus.length;
  //다음 인덱스 메뉴 활성화
  tabMenus[currentIdx].classList.add('active');
  //다음 인덱스 컨텐츠 활성화
  tabConts[currentIdx].style.display = 'block';
}

//초기 설정(컨텐츠 갯수만큼 메뉴버튼생성)
for (let i = 0; i < tabConts.length; i++) {
  tabMenusWrap += `<li><a href="#tabs-${i + 1}">menu${i + 1}</a></li>`;
  tabMenu.innerHTML = tabMenusWrap;
}
let tabMenus = document.querySelectorAll('.tab-menu a');
//각 메뉴 클릭시 컨텐츠
for (let i = 0; i < tabMenus.length; i++) {
  tabMenus[i].addEventListener('click', (e) => {
    e.preventDefault();
    for (let x = 0; x < tabMenus.length; x++) {
      tabMenus[x].classList.remove('active');
    }
    e.target.classList.add('active');

    for (let y = 0; y < tabConts.length; y++) {
      tabConts[y].style.display = 'none';
    }

    let selectMenuHREF = tabMenus[i].getAttribute('href');
    let selectContId = selectMenuHREF.replace('#', '');

    document.getElementById(selectContId).style.display = 'block';
  });
}

//첫번째 컨텐츠 활성화
document.querySelector('#tabs-1').style.display = 'block';
tabMenus[0].classList.add('active');

// 마우스가 메뉴안으로 들어가면 자동멈춤

tabWrapper.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

tabWrapper.addEventListener('mouseleave', () => {
  autoChange();
});

//
function autoChange() {
  intervalId = setInterval(changeMenu, 1000);
}

autoChange();
