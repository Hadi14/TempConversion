const d = document;
const inp = d.querySelector("#inp");
const convert = d.querySelector(".conversion");
const reset = d.querySelector(".reset");
const change = d.querySelector(".change");
const alert = d.querySelector(".alert");
// console.log(inp.placeholder);
convert.addEventListener('click', () => {
    if (inp.placeholder == "°C")
        alert.innerHTML = (inp.value * (9 / 5)) + 32;
    if (inp.placeholder == "°F")
        alert.innerHTML = (inp.value - 32) * 5 / 9;

})



change.addEventListener('click', () => {
    if (inp.placeholder == "°C")
        inp.placeholder = "°F";
    else if (inp.placeholder == "°F")
        inp.placeholder = "°C";

})

reset.addEventListener('click', () => {
    inp.value = "";
})