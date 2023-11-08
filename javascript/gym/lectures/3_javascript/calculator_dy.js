'use strict';

//variable
let sum = document.querySelector('#sum');
let min = document.querySelector('#min');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

let buttons = document.querySelectorAll('.operator-btn');
//function colorChange
const colorChange = () => {
  buttons.forEach((value) => {
    value.style.backgroundColor = 'white';
    value.style.color = 'black';
  });
};

//function btnClickEvent
const btnClickEvent = (self) => {
  self.target.style.backgroundColor = 'grey';
  self.target.style.color = 'white';
};

let operator = '';

//operator
sum.addEventListener('click', (event) => {
  operator = '+';
  colorChange();
  btnClickEvent(event);
});

min.addEventListener('click', (event) => {
  operator = '-';
  colorChange();
  btnClickEvent(event);
});

multiply.addEventListener('click', (event) => {
  operator = '*';
  colorChange();
  btnClickEvent(event);
});

divide.addEventListener('click', (event) => {
  operator = '/';
  colorChange();
  btnClickEvent(event);
});

equal.addEventListener('click', () => {
  colorChange();
  let num1 = palseFloat(number1.value);
  let num2 = palseFloat(number2.value);

  if (operator === '+'){
    result = num1 + num2;
  }else if(operator === '-'){
    result = num1 - num2;
  }else if(){

  }else if(){

  }else{}


});
