'use strict';

let emailBox = document.querySelector('#email');
let passwordBox = document.querySelector('#password');
let loginBtn = document.querySelector('#login');
// let resultArea1 = documnet.querySelector('#result-area1');

loginBtn.addEventListener('click', (e) => {
  let email = emailBox.value;
  let password = passwordBox.value;
  if (email === '' || email.includes('@') === false) {
    e.target.textContent = '이메일이 유효하지않습니다.';
  } else if (!password) {
    passwordBox.placeholder = '비밀번호를 입력해주세요.';
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    passwordBox.placeholder = '비밀번호는 8~16자리입니다.';
  } else {
    e.target.textContent = 'Logout';
  }
});

let btnBgControl = document.querySelector('#btn-bg-control');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let plist = document.querySelectorAll('p');

const darkLightHandler = (self) => {
  if (self.value === 'dark') {
    body.style.backgroundColor = 'black';
    self.value = 'light';
  } else if (self.value === 'light') {
    body.style.backgroundColor = 'white';
    h1.style.color = '#313944';
    h2.style.color = '#313944';
    let i = 0;
    while (i < plist.length) {
      plist[i].style.color = '#313944';
      i = i + 1;
    }
    btnBgControl.style.backgroundColor = '#313944';
    btnBgControl.style.color = 'white';
    self.value = 'default';
  } else {
    body.style.backgroundColor = '#313944';
    self.value = 'dark';
    h1.style.color = 'white';
    h2.style.color = 'white';
    let i = 0;
    while (i < plist.length) {
      plist[i].style.color = '#bbc8d8';
      i = i + 1;
    }
    btnBgControl.style.backgroundColor = '#ffffffe6';
    btnBgControl.style.color = '#313943';
  }
};
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
