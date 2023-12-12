var fruits = ['apple', 'orange', 'cherry'];
// for
for (let i = 0; i < fruits.length; i++) {
  document.getElementById('for').innerHTML += '<li>' + fruits[i] + '</li>';
}
// for each
fruits.forEach((e) => {
  document.getElementById('foreach').innerHTML += e + '<br>';
});

// for of
for (let fruit of fruits) {
  document.getElementById('forof').innerHTML += fruit + '<br>';
}

//for in (객체내의 값들마다 할일) 객체=변수(property) + 함수(method)
let person = {
  이름: '홍길동',
  나이: 200,
  성별: '남성',
};

for (let x in person) {
  document.getElementById('forin').innerHTML += '<li>' + x + ' : ' + person[x] + '</li>';
}

//do / while

let y = 0;
do {
  document.getElementById('dowhile').innerHTML += '<li>' + fruits[y] + '</li>';
  y++;
} while (y < fruits.length);
