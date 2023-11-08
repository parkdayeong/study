let rect = document.querySelector('.rect');
console.log(rect);
let circle = document.querySelector('.circle');
console.log(circle);
let body = document.querySelector('body');

body.addEventListener('click', function (event) {
  circle.style.left = event.pageX - 15 + 'px';
  circle.style.top = event.pageY - 15 + 'px';
});
