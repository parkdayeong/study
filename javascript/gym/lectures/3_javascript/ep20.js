'use strict';

// 함수선언식 [호이스팅o]
// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: cong, 나이 : 2');
// }

// 함수표현식 [호이스팅x]
// const sayHello = () => {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: cong, 나이 : 2');
// };

//파라미터(매개변수)
// const sayHello = (name, age) => {
//   console.log('이름과 나이를 출력해주세요.');
//   console.log(`name: ${name}, age:${age}`);
// };

// sayHello('cong', 2);
// sayHello('cookie', 4);

//반환값 return

// const sum = (num1 = 0, num2 = 0) => {
//   return num1 + num2;
// };

// let result = sum(5);
// console.log(`result : ${result}`);

//익명함수

// (function () {
//   console.log('hi');
// })();

//es6 Arrow Function

// const sum = (num1 = 0, num2 = 0) => num1 + num2;

// let result = sum(1, 3);
// console.log(result);

// let fruits = ['apple', 'banana', 'pineapple'];

// fruits.forEach((value, index) => {
//   console.log(`${index + 1} 번째 과일 : ${value}`);
// });

// 객체 리터럴 문법
// const cat = {
//   name: 'cong',
//   age: 25,
// };

// 객체 생성자 문법
// const cat = new Object();
// cat.name = 'cong';
// cat.age = 2;
// cat.weight = 4;

// console.log(`이름 : ${cat['name']}, 나이 : ${cat.age}`);

// const person = {
//   name: ['Lian', 'Bradley'],
//   age: 15,
//   gender: 'male',
//   interests: ['music', 'health'],
//   hello: function () {
//     console.log('hello');
//   },
//   greeting: function () {
//     console.log('hi');
//   },
//   hobby: {
//     name: 'programing',
//     alert: function () {
//       alert('hobby');
//     },
//   },
// };

// console.log(person.name);

// person.hobby.alert();

// const cat1 = {
//   name: 'cong',
//   age: 2,
//   weight: '4kg',
// };
// const cat2 = {
//   name: 'cookie',
//   age: 4,
//   weight: '5kg',
// };

// function createCat(name, age, weight) {
//   return {
//     name,
//     age,
//     weight,
//   };
// }

// const cat1 = createCat('cong', 2, '4kg');
// const cat2 = createCat('cookie', 5, '5kg');
// console.log(cat1);
// console.log(cat2);

let username = 'park';

console.log(username);
changeName(username);
console.log(username);

function changeName(name) {
  name = '홍길동';
  console.log(name);
}

console.log('-----------------------');
let person = {
  name: ' 짐코딩',
  age: 25,
};

console.log(person);
changePersonName(person);
console.log(person);

function changePersonName(person) {
  person.name = '홍길동';
  person.age = 60;
}
