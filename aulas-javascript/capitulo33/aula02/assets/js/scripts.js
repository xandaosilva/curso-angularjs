const form = document.forms.namedItem("select-radio");
const submitDiv = document.querySelector("#submit");
const changeDiv = document.querySelector("#change");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const radio = form.radio;
    submitDiv.innerHTML = radio.value;
});

form.radio.forEach((res) => {
    res.addEventListener("change", (event) => {
        if(event.target.checked){
            console.log(event.target.value);
        }
    });
});
