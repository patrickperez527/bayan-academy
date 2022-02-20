// console.log('Are you still there!');
// setTimeout(() => {
//     console.log('Hello');
//     setTimeout(() => {
//         console.log('Good bye!')
//     }, 5000)
// }, 3000)

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// setTimeout(() => {
//     clearInterval(id);
// }, 5000);   


// filter and map
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.filter(num => {
//     return num === 4;
// })

// get even
// const even = nums.filter(num => {
//     return num % 2 !== 1;
// })

// const smallNum = nums.filter(num => {
//     return num < 5;
// })

// const students = [
//     {
//         fullname: 'Aldrin John Tamayo',
//         age: 29,
//         gpa: 90
//     },
//     {
//         fullname: 'Travis John Tamayo',
//         age: 18,
//         gpa: 95
//     },
//     {
//         fullname: 'Sheela Mae Tamayo',
//         age: 27,
//         gpa: 100
//     }
// ];

// const highGpa = students.filter((student) => {
//     return student.gpa > 90;
// })

// const highGpa = students.filter(student => student.gpa > 90);
// const lowGpa = students.filter(student => student.gpa < 95);

// const names = highGpa.map(name => {
//     return name.fullname;
// })

// every() method

// const words = ['dog', 'dig', 'log', 'bag'];
// const test = words.every(word => {
//     return word.length === 3;
// })

// const exams = [80, 90, 92, 77, 89, 88];
// const grades = exams.every(grade => grade >= 75);

// some() method

// const words = ['dawg', 'dig', 'log', 'bag'];
// const exams = [80, 90, 92, 77, 89, 88];

// const test = words.some(word => {
//     return word.length >= 4;
// })

// some() method

// const words = ['dawg', 'dig', 'log', 'bag'];
// const exams = [80, 90, 92, 77, 89, 88];

// const test = words.some(word => {
//     return word.length >= 4;
// })