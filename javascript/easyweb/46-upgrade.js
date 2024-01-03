// Strict Mode
'use strict';

// variable
const imageListWrapper = document.querySelector('.image-list'),
  imageLists = document.querySelectorAll('.image-list li'),
  imageListsP = document.querySelectorAll('.image-list figcaption p:first-child'),
  btns = document.querySelectorAll('.view-options button'),
  dNone = 'd-none',
  gridView = 'grid-view',
  listView = 'list-view';

// click event - list change
for (let btn of btns) {
  btn.addEventListener('click', () => {
    let parent = btn.parentNode;
    document.querySelector('.view-options .active').classList.remove('active');
    parent.classList.add('active');

    if (parent.classList.contains('show-list')) {
      parent.previousElementSibling.previousElementSibling.classList.add(dNone);
      imageListWrapper.classList.remove(gridView);
      imageListWrapper.classList.add(listView);
    } else {
      parent.previousElementSibling.classList.remove(dNone);
      imageListWrapper.classList.remove(listView);
      imageListWrapper.classList.add(gridView);
    }
  });
}

// input event - image sizing
const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input', () => {
  let imgWidth = rangeInput.value;
  // console.log(imgWidth);
  document.documentElement.style.setProperty('--minRangeValue', `${imgWidth}px`);
});

// keydown event - search photos
const searchInput = document.querySelector('input[type="search"]');
let myArray = [];
let count = 1;
for (let p of imageListsP) {
  myArray.push({
    id: count++,
    subject: p.textContent,
  });
}

searchInput.addEventListener('keydown', keydownHandler);

function keydownHandler() {
  let keyword = this.value;
  // console.log(keyword);
  for (let list of imageLists) {
    list.classList.add(dNone);
  }
  let filteredArray = myArray.filter((el) => el.subject.includes(keyword));
  if (filteredArray.length > 0) {
    for (let filteredList of filteredArray) {
      document
        .querySelector(`.image-list li:nth-child(${filteredList.id})`)
        .classList.remove(dNone);
    }
  }

  let counter = document.querySelector('.counter span');
  counter.innerHTML = filteredArray.length;
}
