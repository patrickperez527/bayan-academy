// spread and rest parameter

function sum(){
    // console.log(arguments);
    return arguments.reduce((total, element) => total + element);
}

function sum(...nums){
    let total = 0;
    for(let n of nums) {
        total += n;
    }
    return total;  
}

// sum(1,2,3,4) = 10

function sum(...nums){
    // console.log(arguments);
    return nums.reduce((total, element) => total + element);
}
// sum(1,2,3,4) = 10

// coding challengge
function factorialize(num){
    let prod = 1;
    for (let i = 2; i <= num; i++) {
        prod *= i;
    }
    return prod;
}