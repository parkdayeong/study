'use strict';

var firstTitle = document.getElementById('title');
var myList = document.getElementsByClassName('list');
var paragraphs = document.getElementsByTagName('p');
var myList2 = document.querySelector('.list .red');

// console.log(firstTitle, myList, paragraphs, myList2);

firstTitle.style.color = 'red';
// firstTitle.style.display = 'none';
myList[0].style.backgroundColor = 'beige';

// console.log(paragraphs);
// let i = 0;
// while (i < paragraphs.length) {
//   paragraphs[i].style.color = 'blue';
//   i++;
// }

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue';
}
