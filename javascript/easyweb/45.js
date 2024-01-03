'use strict';
//variable
const tabMenus = document.querySelectorAll('.tab-menu li'),
  tabConts = document.querySelectorAll('#tab-content div'),
  highlight = document.querySelector('.highlight');

let newLeft, newWidth;

tabMenus.forEach((menu, idx) => {
  menu.addEventListener('click', (e) => {
    let link = menu.querySelector('a');
    e.preventDefault();
    showCont(idx);
    moveHighlight(idx);
    tabMenus.forEach((menu2) => {
      menu2.querySelector('a').classList.remove('active');
    });
    link.classList.add('active');
  });
});

function showCont(num) {
  tabConts.forEach((cont) => {
    cont.style.display = 'none';
  });
  tabConts[num].style.display = 'block';
}

function moveHighlight(num) {
  newLeft = tabMenus[num].offsetLeft;
  newWidth = tabMenus[num].offsetWidth;
  highlight.style.left = newLeft + 'px';
  highlight.style.width = newWidth + 'px';
}
