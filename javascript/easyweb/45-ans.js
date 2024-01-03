//strict mode
'use strict';

//variable
const tabMenus = document.querySelectorAll('.tab-menu li');
const tabContents = document.querySelectorAll('#tab-content div');
const highlight = document.querySelector('.highlight');

tabMenus.forEach((tabMenu, idx) => {
  tabMenu.addEventListener('click', (e) => {
    e.preventDefault();
    showContent(idx);
    moveHighlight(idx);
  });
});

function showContent(num) {
  tabContents.forEach((tabCont) => {
    tabCont.style.display = 'none';
  });
  tabContents[num].style.display = 'block';
}

function moveHighlight(num) {
  let newLeft = tabMenus[num].offsetLeft;
  let newWidth = tabMenus[num].offsetWidth;
  // console.log(newLeft, newWidth);
  highlight.style.left = newLeft + 'px';
  highlight.style.width = newWidth + 'px';
}
