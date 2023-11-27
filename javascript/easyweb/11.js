'use strict';

/*
 * - 변수 지정하기
 * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
 * - 스크롤과 클릭 이벤트 작성하기
 */

let bttBtn = document.querySelector('#back-to-top');
let docElem = document.documentElement;
let offset;
let scrollPos;
let docHeight;
// console.log(docElem);

// 문서 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if (docHeight != 0) {
  offset = docHeight / 10;
}
// 스크롤 이벤트 추가
window.addEventListener('scroll', () => {
  scrollPos = docElem.scrollTop;
  bttBtn.className = scrollPos > 20 ? 'visible' : '';
});

// 클릭 이벤트 추가 e
bttBtn.addEventListener('click', (e) => {
  // 링크의 본연의 기능을 막음
  e.preventDefault();
  docElem.scrollTop = 0;
  docElem.style.scrollBehavior = 'smooth';
  setTimeout(function () {
    docElem.style.scrollBehavior = 'auto';
  }, 10000);
});
