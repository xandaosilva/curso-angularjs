const title = document.querySelector("h1");
const paragraphs = document.querySelectorAll("p");

title.style.fontFamily = "Arial";
title.style.color = "darkCyan";

paragraphs.forEach((element) => {
    element.style.fontFamily = "Arial";
    element.style.fontSize = "12px";
});

title.classList.add("active", "teste1", "teste2");
title.classList.remove("teste2");

console.log(title.className);