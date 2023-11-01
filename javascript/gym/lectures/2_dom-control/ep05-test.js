// placeholder 문구 변경

document.querySelector("input").placeholder = "문구를 입력해주세요.";

// 추가버튼
let addBtn = document.querySelector("#add");
// 앞에추가버튼
let addBefordBtn = document.querySelector("#before");
// 타겟제거버튼
let targetRemoveBtn = document.querySelector("#target-remove");
// inputbox
let inputBox = document.querySelector("input");

// -------------- 추가버튼
addBtn.addEventListener("click", function () {
  // 변수선언
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let button = document.createElement("button");

  //li추가
  ul.appendChild(li);
  li.textContent = inputBox.value;
  //버튼추가
  li.appendChild(button);
  button.textContent = "X";
  button.setAttribute("class", "remove-btn");

  //x버튼 클릭시, remove
  button.addEventListener("click", removeParentNode);

  inputBox.value = "";
  inputBox.focus();
});
// -------------- 앞에추가버튼

addBefordBtn.addEventListener("click", function () {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  let target = document.querySelector("#target");
  let button = document.createElement("button");

  ul.insertBefore(li, target);
  li.textContent = inputBox.value;

  li.appendChild(button);
  button.textContent = "X";
  button.setAttribute("class", "remove-btn");

  button.addEventListener("click", removeParentNode);

  inputBox.value = "";
  inputBox.focus();
});

// -------------- 타겟제거버튼
let removeBtn = document.querySelector(".remove-btn");

removeBtn.addEventListener("click", removeParentNode);

targetRemoveBtn.addEventListener("click", function () {
  removeBtn.parentNode.remove();
  inputBox.focus();
});

function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.focus();
}
