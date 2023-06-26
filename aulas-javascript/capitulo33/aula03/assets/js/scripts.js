const form = document.forms.namedItem("select-checkbox");
const submitDiv = document.querySelector("#submit");
const changeDiv = document.querySelector("#change");
let checkedValues = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkbox = form.checkbox;
    checkedValues = [];

    checkbox.forEach((res) => {
        if(res.checked){
            checkedValues.push(res.value);
        }
    });

    console.log(checkedValues);
});

form.checkbox.forEach((res) => {
    res.addEventListener("change", (event) => {
        hasChecked(event, res);
        changeDiv.innerHTML = checkedValues;
    });
});

const hasChecked = (event, element) => {
    const { target } = event;

    if(target.checked){
        return checkedValues.push(element.value);
    }

    if(!target.checked){
        return checkedValues.map((checkedValue, index) => {
            if(element.value === checkedValue){
                return checkedValues.splice(index, 1);
            }
        });
    }
}
