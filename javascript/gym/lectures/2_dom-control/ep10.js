//ep10

let inputBox = document.querySelector('#input-box');

// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('keyup');
// });

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// inputBox.addEventListener('focus', function (event) {
//   console.log('focus');
// });

// inputBox.addEventListener('blur', function (event) {
//   console.log('blur');
// });

// inputBox.addEventListener('change', function (event) {
//   console.log('change');
// });

let img1 = document.querySelector('img');

img1.addEventListener('error', function (event) {
  console.log(event.target);
  event.target.src = '../../img/apple.jpg';
});
