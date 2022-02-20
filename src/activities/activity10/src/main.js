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

// new es6 features

// old way
function rollDice(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}

// new way
function rollDice(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person = 'AJ', msg = 'Hi'){
    console.log(`${msg}, ${person}!`)
}

// spread
const nums = [9, 3, 2, 8];
Math.max(...nums); // 9

console.log(...'hellow');

const students1 = ['Aldrin', 'John', 'AJ'];
const students2 = ['Mark', 'Paolo', 'Michael'];

const allStudents = [...students1, ...students2];

// spread with objects

const student1 = {
    fname: 'Aldrin John',
    lname: 'Tamayo',
    isMale: true,
}

const student2 = {
    fname: 'Travis John',
    lname: 'Tamayo',
    isMale: true,
    gpa: 90
}

const studentTest1 = {...student1, ...student2};
console.log(studentTest1);
const studentTest2 = {...student2, ...student1};
console.log(studentTest1);

// merge obh
const dataFromForm = {
    fname: 'Aldrin John',
    lname: 'Tamayo',
    eadd: 'test@yahoo.com'
}

const registeredAccount = {
    uname: 'user123',
    passs: 'pass123'
}

const userAccount = {...dataFromForm, ...registeredAccount};

const dataFromForm = {
    fname: 'Aldrin John',
    lname: 'Tamayo',
    eadd: 'test@yahoo.com'
}

const dataFromForm1 = {
    fname: 'Aldrina John',
    lname: 'Tamayo',
    eadd: 'test@yahoo.com'
}

const admin = 'admin123';

const test = {...dataFromForm, ...dataFromForm1, ...admin};
