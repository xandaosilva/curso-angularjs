const str = document.querySelector("strong");
const container = document.querySelector(".container");
const title = document.querySelector("h1");
const paragraph = document.querySelector(".paragraph");
const newDiv = document.createElement("div");
const subTitle = document.createElement("h2");


console.log(str.parentElement);
console.log(str.parentNode);
console.log(container.children);
console.log(container.childNodes);
console.log(container.firstChild);
console.log(container.lastChild);
console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(title.nextSibling);
console.log(title.nextElementSibling);
console.log(title.previousSibling);
console.log(paragraph.previousElementSibling);

newDiv.innerText = "Adicionando novo conteúdo";
subTitle.innerText = "Lorem";

container.append("Adicionando conteúdo");
container.appendChild(newDiv);
container.insertBefore(subTitle, paragraph);
container.before("Lorem ipsum");
container.after("Último elemento adicionado.");