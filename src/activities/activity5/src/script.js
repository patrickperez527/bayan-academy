const square = {
    area(side) {
      // returns value squared
      return side * side;
    },
    perimeter(side) {
      // value times 4
      return side * 4;
    },
};
// test
console.log(square.area(5)); // 25
console.log(square.perimeter(4)); // 16
