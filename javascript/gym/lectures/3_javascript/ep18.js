//strict Mode
'use strict';

// let emailBox = document.querySelector('[name=email]');
// let passwordBox = document.querySelector('[name=password]');

// let loginBtn = document.querySelector('#login');
// let resultArea = document.querySelector('#result-area');

// loginBtn.addEventListener('click', () => {
//   let email = emailBox.value;
//   let password = passwordBox.value;

//   if (email === '' || email.includes('@') === false) {
//     resultArea.textContent = '이메일이 유효하지 않습니다.';
//   } else if (!password) {
//     resultArea.textContent = '비밀번호를 입력해주세요';
//   } else if ((password.length >= 8 && password.length <= 16) === false) {
//     resultArea.textContent = '비밀번호는 8~16자여야합니다.';
//   } else {
//     resultArea.textContent = '로그인 성공';
//   }
// });

let number = 10;
let message = number % 2 === 1 ? '홀수입니다.' : '짝수입니다.';

// if (number % 2 === 1) {
//   message = '홀수입니다.';
// } else {
//   message = '짝수입니다.';
// }

console.log(message);
