const form = document.querySelector('form');
const qty = document.querySelector("#qty");
const product = document.querySelector("#product");
const list = document.querySelector("#list");
form.addEventListener("submit", function (e){
    e.preventDefault();
    const newli = document.createElement("li");
    newli.append(qty.value);
    newli.append(' ');
    newli.append(product.value);
    list.append(newli);
    qty.value = "";
    product.value = ""
})