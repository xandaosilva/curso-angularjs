const btn = document.querySelector("button");
const menu = document.querySelector("#menu");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Você clicou no botão!");
});

// btn.removeEventListener("click", (e) => {
//     e.preventDefault();
// });

menu?.addEventListener("click", (e) => {
    e.preventDefault();
    const { target } = e;

    switch (target.getAttribute("class")) {
        case "home":
            console.log("Home");
            break;
        case "sobre":
            console.log("Sobre");
            break;
        case "contato":
            console.log("Contato");
            break;
        default:
            break;
    }
});
