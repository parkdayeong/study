'use strict';

let header = document.querySelector('header');
let nav = document.querySelector('nav');
let subMenu = document.querySelectorAll('.submenu');
let subMenuHeight = 0;
let headerHeight = header.offsetHeight;
let mainMenuList = document.querySelectorAll('.mainmenu > li');

/** navd에 마우스를 올리면
 *  header의 높이가 270으로
 * 마우스가 나가면 header의 높이를 50으로 변경하기
 */

// nav.addEventListener('mouseover', () => {
//   header.style.height = 270 + 'px';
// });

// for (let i = 0; i < subMenu.length; i++) {
//   if (subMenu[i].offsetHeight > subMenuHeight) {
//     subMenuHeight = subMenu[i].offsetHeight;
//   }
// }

/** mainMenuList에 마우스를 올리면 header의 높이를 headerHeight와 subMenuHeight를 더한
 * 최종 크기로 변경
 * mainMenuList에 마우스를 나가면 headerHeight로 변경
 */

for (let i = 0; i < mainMenuList.length; i++) {
  mainMenuList[i].addEventListener('mouseover', function () {
    subMenuHeight = this.querySelector('ul').offsetHeight;
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  mainMenuList[i].addEventListener('mouseout', () => {
    header.style.height = headerHeight + 'px';
  });
}
