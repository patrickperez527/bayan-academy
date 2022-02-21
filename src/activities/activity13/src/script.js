function confirmEnding(string, endString){
    return string.substr(-endString.length) === endString;
}
// Test Cases
console.log(confirmEnding('Bastian', 'n')); // true
console.log(confirmEnding('Congratulation', 'on')); // true
console.log(confirmEnding('Connor', 'n')); // false
console.log(confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification')); // false
console.log(confirmEnding('He has to give me a new name', 'name')); // true
console.log(confirmEnding('Open sesame', 'same')); // true
console.log(confirmEnding('Open sesame', 'sage')); // false
console.log(confirmEnding('Open sesame', 'game')); // false
console.log(confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain')); // false
console.log(confirmEnding('Abstraction', 'action')); // true