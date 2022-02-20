function allEvens(input) {
    return input.every(val => val % 2 === 0)
}

console.log(allEvens([2, 4, 6, 8, 10])); // true
console.log(allEvens([1, 3, 5, 7, 9])); // false
console.log(allEvens([1, 2, 3, 4, 5])); // false