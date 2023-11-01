let liList = document.querySelectorAll("li");
// console.log(liList[0]);

let i = 0;
let img = document.querySelector("img");
let selectedItem = document.querySelector(".selected-item");

while (i < liList.length) {
  liList[i].addEventListener("click", selectItem);
  i = i + 1;
}

function selectItem(event) {
  img.setAttribute("src", event.target.dataset.img);
  selectedItem.textContent = event.target.textContent;
}
