'use strict';
//esma2016~ const, let, ``,=>

const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
const colors = ['deepskyblue', 'red', 'orange', 'green', 'blue', 'skyblue', 'yellow'];

// 링크
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (e) => {
    e.preventDefault();
  });
  links[i].addEventListener('mouseover', mouseEnterFunc);
}

function mouseEnterFunc() {
  if (!this.parentNode.classList.contains('active')) {
    for (let x = 0; x < links.length; x++) {
      if (links[x].parentNode.classList.contains('active')) {
        links[x].parentNode.classList.remove('active');
      }
      links[x].style.opacity = '0.25';
    }
    this.parentNode.classList.add('active');
    this.style.opacity = '1';

    // const width = this.getBoundingClientRect().width;
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    const left = this.offsetLeft;
    // const left = this.getBoundingClientRect().left + window.pageXOffset;
    const top = this.offsetTop;
    // const top = this.getBoundingClientRect().top + window.pageYOffset;
    const color = colors[Math.floor(Math.random() * colors.length)];
    // console.log(Math.floor(Math.random() * links.length));

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
  }
} // mouseEnterFunc
