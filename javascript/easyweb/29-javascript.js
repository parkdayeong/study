'use strict';

/**
 * w3schools javascript offsetLeft
 */

/** javascript */

let tabMenu = document.querySelector('.tab-menu');
let tabMenuWrap = '';
let highlight = document.querySelector('.highlight');
let tabConts = document.querySelectorAll('#tab-content div');

// 컨텐츠 만큼 메뉴 생성하기
for (let i = 0; i < tabConts.length; i++) {
  tabMenuWrap += `<li><a href="#tabs-${i + 1}">menu${i + 1}</a></li>`;
  tabMenu.innerHTML = tabMenuWrap;
}

let tabMenus = document.querySelectorAll('.tab-menu a');
// 메뉴 클릭 이벤트
for (let i = 0; i < tabMenus.length; i++) {
  tabMenus[i].addEventListener('click', (e) => {
    e.preventDefault();
    highlight.style.left = tabMenus[i].offsetLeft + 'px';
    for (let y = 0; y < tabMenus.length; y++) {
      tabConts[y].style.display = 'none';
    }
    let selectAHref = tabMenus[i].getAttribute('href');
    document.querySelector(selectAHref).style.display = 'block';
    for (let x = 0; x < tabMenus.length; x++) {
      tabMenus[x].classList.remove('active');
    }
    e.target.classList.add('active');
  });
}

// 첫블럭 활성화

tabConts[0].style.display = 'block';
tabMenus[0].classList.add('active');
