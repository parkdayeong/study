// createElement - 지정한 tagName의 HTML요소를 생성
// let li = document.createElement("li");
// let ul = document.querySelector("ul");

//appendChild 항상 마지막 자식요소로 추가, 삽입할 요소만 매개변수로 제공하면됨
// ul.appendChild(li);
// li.textContent = "강아지";

//insertBefore 매개변수를 두개 받습니다. 첫번재 매개변수는 삽입할 요소/ 두번째 매개변수는 삽입할 위치를 정함

// let addBtn = document.getElementById("button");
// let inputBox = document.querySelector("input");

// addBtn.addEventListener("click", function () {
//   let li = document.createElement("li");
//   let ul = document.querySelector("ul");
//   ul.appendChild(li);
//   li.textContent = inputBox.value;
// });

//self

// function addAnimal() {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");
//   let inputBox = document.querySelector("input");

//   ul.appendChild(li);
//   li.textContent = inputBox.value;
// }

// let addBeforeBtn = document.getElementById("before");
// addBeforeBtn.addEventListener("click", function () {
//   let li = document.createElement("li");
//   let ul = document.querySelector("ul");
//   let targetLi = document.querySelector("#target");
//   console.log(targetLi);
//   let inputBox = document.querySelector("input");
//   li.textContent = inputBox.value;
//   ul.insertBefore(li, targetLi);
// });

//1. 추가버튼 클릭시 리스트 아래로 추가 하기 appendChild

// function addText() {
//   let li = document.createElement("li");
//   let ul = document.querySelector("ul");
//   let input = document.querySelector("input");
//   ul.appendChild(li);
//   li.textContent = input.value;
// }

// let addBeforeBtn = document.querySelector("#before");
// // console.log(addBerforeBtn);

// addBeforeBtn.addEventListener("click", function () {
//   let li = document.createElement("li");
//   let ul = document.querySelector("ul");
//   let input = document.querySelector("input");
//   let targetLi = document.querySelector("#target");
//   li.textContent = input.value;
//   ul.insertBefore(li, targetLi);
// });

//1 placeholder 문구 변경
// document.querySelector("input").placeholder = "문구를 입력하세요.";

// let addBtn = document.querySelector("#button");
// let addBeforeBtn = document.querySelector("#before");
// let input = document.querySelector("input");
// let removeTargetBtn = document.querySelector("#target-remove");

// let removeBtn = document.querySelector(".remove-btn");

// //1 추가버튼클릭시, 기준 아래로 문구 추가

// addBtn.addEventListener("click", function () {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");
//   li.textContent = input.value;

//   let button = document.createElement("button");
//   li.appendChild(button);
//   button.textContent = "X";
//   button.setAttribute("class", "remove-btn");
//   button.addEventListener("click", function (event) {
//     event.target.parentNode.remove();
//   });
//   ul.appendChild(li);
//   input.value = "";
// });

// addBeforeBtn.addEventListener("click", function () {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");
//   li.textContent = input.value;
//   let target = document.querySelector("#target");
//   ul.insertBefore(li, target);
// });

// removeTargetBtn.addEventListener("click", function () {
//   let targetLi = document.querySelector("#target");
//   targetLi.remove();
// });

// removeBtn.addEventListener("click", function (event) {
//   event.target.parentNode.remove();
// });

//placeholder 문구 대체
document.querySelector("input").placeholder = "문구를 입력해주세요";

//변수선언

let addBtn = document.querySelector("#button");
let addBeforeBtn = document.querySelector("#before");
let inputBox = document.querySelector("input");
let removeBtn = document.querySelector(".remove-btn");

//추가버튼
addBtn.addEventListener("click", function () {
  //변수선언
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let button = document.createElement("button");

  ul.appendChild(li);
  li.textContent = inputBox.value;
  //remove버튼 추가
  li.appendChild(button);
  button.textContent = "X";
  button.setAttribute("class", "remove-btn");
  inputBox.value = "";

  button.addEventListener("click", function (event) {
    event.target.parentNode.remove();
  });
});

//앞에추가버튼

addBeforeBtn.addEventListener("click", function () {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let target = document.querySelector("#target");
  li.textContent = inputBox.value;
  ul.insertBefore(li, target);

  let button = document.createElement("button");
  li.appendChild(button);
  button.textContent = "X";
  button.setAttribute("class", "remove-btn");

  inputBox.value = "";

  button.addEventListener("click", function (event) {
    event.target.parentNode.remove();
  });
});

//타겟제거버튼

removeBtn.addEventListener("click", function (event) {
  event.target.parentNode.remove();
});
