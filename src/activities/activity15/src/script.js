const form = document.querySelector("#test-form");
const product = document.querySelector("#product");
const quantity = document.getElementById('qty');
const list = document.querySelector("#list");
// const btn = document.querySelector("#test-btn");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const userInput = product.value;
  const quantityInput = quantity.value;
  const newLi = document.createElement("li");
  newLi.innerText = 'Product: ' + userInput + ' - ';
  newLi.innerText += 'Quantity: '+ quantityInput;
  list.append(newLi);
  product.value = "";
  quantity.value = "";
})
