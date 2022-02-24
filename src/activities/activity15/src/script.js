function addItem() {
    const todoInput = document.getElementById("todo-input");
    const todoValue = todoInput.value;
    const todos = document.getElementById("todos");
    const li = document.createElement("li");

    if (todoInput.value === ''){
      return;
    }

    li.textContent = todoValue + ' ';
    const deleteTodo = document.createElement('a');
    deleteTodo.innerHTML = '<i class="fa fa-trash-o" style="font-size:20px;color:red"></i>';
  
    deleteTodo.addEventListener("click", deleteItem);
    li.appendChild(deleteTodo);

    todos.appendChild(li);
    todoInput.value = "";

    function deleteItem() {
        todos.removeChild(li);
    }
}