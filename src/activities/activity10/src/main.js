// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

const prices = [10, 8.50, 2.5, 20, 30.5];
const total = prices.reduce((total, price) => {
    return total + price;
})
console.log(total);

const min = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min; // 2.5
})