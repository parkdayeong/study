// [1]get 메서드
// let title = 드ocument.getElementById("title");
// console.log(title);
// title.style.color = "red";

// let items = document.getElementsByClassName("item");
// console.log(items);
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);

// let liList = document.getElementsByTagName("li");
// console.log(liList);

// [2] Html요소 쿼리
let h2 = document.querySelector("h2");
console.log(h2);
let h2id = document.querySelector("#title");
console.log(h2id);

let item = document.querySelector(".item");
console.log(item);
let items = document.querySelectorAll(".item");
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);

h2.textContent = "<span>운동입니다.</span>";
h2.innerHTML = "<span>동동</span>";
console.log(h2.textContent);

let input = document.querySelector("input");
console.log(input);
input.setAttribute("placeholder", "헬스 운동을 입력해주세요.");
input.removeAttribute("placeholder");
input.setAttribute("required", "");

let helloItem = document.querySelector(".hello");
console.log(helloItem);
// helloItem.style.color = "blue";

helloItem.classList.add("dark", "one");
helloItem.classList.remove("dark");
