'use strict';
const imageList = document.querySelector('.image-list'),
  btns = document.querySelectorAll('.view-options button'),
  imageListItems = document.querySelectorAll('.image-list li'),
  active = 'active',
  listView = 'list-view',
  gridView = 'grid-view',
  dNone = 'd-none';

// 버튼활성화
for (const btn of btns) {
  btn.addEventListener('click', function () {
    const parent = this.parentNode;
    document.querySelector('.view-options .active').classList.remove(active);
    parent.classList.add(active);

    if (parent.classList.contains('show-list')) {
      parent.previousElementSibling.previousElementSibling.classList.add(dNone);
      imageList.classList.remove(gridView);
      imageList.classList.add(listView);
    } else {
      parent.previousElementSibling.classList.remove(dNone);
      imageList.classList.remove(listView);
      imageList.classList.add(gridView);
    }
  });
}

//리스트 너비 조절range 스크립트

const rangeInput = document.querySelector('input[type="range"]');
// console.log(rangeInput);

rangeInput.addEventListener('input', function () {
  // this.value
  document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`);
  // 선택자.style.css속성명 = 값;
  // 선택자.style.backgroundColor = 'blue';
  // 선택자.style.setProperty('background-color' , 'blue')
});

// 검색키워드로 필터 적용하기

const captions = document.querySelectorAll('.image-list figcaption p:first-child');
const myArray = [];
// console.log(captions);
let counter = 1;

for (const caption of captions) {
  myArray.push({
    id: counter++,
    text: caption.textContent,
  });
}

// console.log(myArray);

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector('.toolbar .counter span');

searchInput.addEventListener('keyup', keyupHandler);
// ketdown, keypress
function keyupHandler() {
  for (const item of imageListItems) {
    item.classList.add(dNone);
  }
  const keywords = this.value;
  const filteredArray = myArray.filter((el) =>
    el.text.toLowerCase().includes(keywords.toLowerCase())
  );
  if (filteredArray.length > 0) {
    for (const el of filteredArray) {
      //.image-list li:nth-child(2)
      document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
    }
  }
}

// toLowerCase()

// //filter
// var arr = [1, 2, 3, 5, 15, 22, 48, 30];
// var arr2 = arr.filter((n) => n % 5 == 0);

// console.log(arr2);

// // includes
// var $name = 'cong';
// if ($name.includes('ddd')) {
//   console.log($name);
// } else {
//   console.log('error');
// }
