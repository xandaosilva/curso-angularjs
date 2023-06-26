const paragraph = document.querySelector("p");
const div = document.querySelector("div");
const elementUl = document.createElement("ul");
const listNumber = [1, 2, 3, 4, 5];
const inputName = document.querySelector("#name");
const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const li = document.querySelectorAll("li");

console.log(paragraph.textContent);
console.log(paragraph.innerText);

paragraph.textContent = "Lorem ipsum";
paragraph.innerText = "Lorem ipsum";

div.innerHTML = `${div.innerHTML} <strong>O conteúdo foi alterado</strong>`;

listNumber.forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);

console.log(inputName.value);

div.setAttribute("id", "content");
div.setAttribute("class", "active background-cyan");
div.removeAttribute("id");

listNumber.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    fragment.append(li);
});

ul.appendChild(fragment);

li[2].remove();