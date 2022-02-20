function allEvens(input) {
    return input.every(val => val % 2 === 0)
}

console.log(allEvens([2, 4, 6, 8, 10])); // true
console.log(allEvens([2, 3, 6, 8, 5])); // false