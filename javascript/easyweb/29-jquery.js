'use strict';

// var test = $('.tab-menu li:nth-child(2)').offset().left;
// var test3 = $('.tab-menu li:nth-child(3)').position().left;
/**
 * jquery
 * A.position().left = A요소 부모중에 position 기본값이 아닌 요소로부터의 거리
 * A.offset().left -- 화면기준
 */

/** jquery */

let tabLink = $('.tab-menu li');
let highlight = $('.highlight');

// console.log(tabLink);

tabLink.click(function (e) {
  e.preventDefault();
  let targetLeft = $(this).position().left;
  console.log(targetLeft);
  highlight.animate({ left: targetLeft });
});
