function myFunction(){
    let userInput = prompt("Enter a command (New, List, Delete, Quit)");
    const todos = [];

    while (userInput !== "Quit") {
    if (userInput === "List") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++){
        console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    } else if  (userInput === "New") {
        const newTodo = prompt("Enter your new todo item:");
        console.log(`${newTodo} has been added to your Todo List!`);
        todos.push(newTodo);
    } else if (userInput === "Delete") {
        const removeTodo = prompt("Enter the item's index you want to delete:");
        console.log(`${todos[removeTodo]} has been deleted!`);
        todos.splice(removeTodo, 1);
    }
    userInput = prompt("Enter a command (New, List, Delete, Quit)");
    }
    console.log("Quitting...");
    console.log("App has been closed");
}