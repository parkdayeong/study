const div = document.createElement("div");
div.className = "foo";

console.log(div.outerHTML);

div.classList.remove("foo");
div.classList.add("anotherclass");
console.log(div.outerHTML);

div.classList.toggle("visible");
div.classList.toggle("visible");
console.log(div.outerHTML);

div.classList.add("foo", "bar", "baz");

console.log(div.outerHTML);

div.classList.remove("foo", "bar", "baz");

console.log(div.outerHTML);

let cls = ["foo", "bar"];
div.classList.add(...cls);
console.log(div.outerHTML);

div.classList.replace("foo", "foo2");
console.log(div.outerHTML);
