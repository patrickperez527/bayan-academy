const form = document.querySelector("#test-form");
const input = document.querySelector("input");
const quantity = document.querySelector('#qty');
const list = document.querySelector("#list");
// const btn = document.querySelector("#test-btn");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const userInput = input.value;
  const quantityInput = quantity.value;
  const newLi = document.createElement("li");
  newLi.innerText = userInput + quantityInput;
  list.append(newLi);
  input.value = "";
  quantity.value = "";
})
