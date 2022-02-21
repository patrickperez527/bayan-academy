function factorialize(num) {
    // will return 1 num is 0 or 1
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}
// Test Cases
console.log(factorialize(5)); // 120
console.log(factorialize(10)); // 1
console.log(factorialize(20)); // 1
console.log(factorialize(0)); // 1