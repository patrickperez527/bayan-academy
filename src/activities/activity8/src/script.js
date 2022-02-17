function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('hello')); // olleh
console.log(reverseString('Howdy')); // ydwoH
console.log(reverseString('Greetings from Earth')); // htraE morf sgniteerG