const form = document.getElementById("test-form");
const product = document.getElementById("product");
const quantity = document.getElementById('qty');
const list = document.getElementById("list");

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const productInput = product.value;
  const quantityInput = quantity.value;

  if (product.value === '' || quantity.value === ''){
    return;
  }

  const newLi = document.createElement('li');
  newLi.innerText = `${quantityInput} ${productInput}`;
  list.append(newLi);
  product.value = '';
  quantity.value = '';
})
