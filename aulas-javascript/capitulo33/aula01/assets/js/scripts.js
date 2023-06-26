const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name= form.name.value;
    const password = form.password.value;
    const formData = new FormData(form);
    const newDiv = document.createElement("div");

    formData.set("name", name);
    formData.set("password", password);

    console.log(formData.has("name"));
    console.log(formData.has("password"));
    
    console.log(formData.get("name"));
    console.log(formData.get("password"));

    newDiv.innerText = name;
    form.nextElementSibling.remove();
    form.after(newDiv);
});