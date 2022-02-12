// CODING CHALLENGE
// Create a program that will exit if the user enters an incorrect password thrice
// If the user enters two incorrect passwords, but was able to provide the correct password for the 3rd time, reset your counter variable into 0
// 3 incorrect enter of password, add alert("Your account has been blocked!");

// Database password

function myFunction(){
    const userPass = 'Password123';
    let inputPass = prompt('Please enter your password:');
    let counter = 0;

    while (inputPass != userPass && ++ counter < 3) {
        inputPass = prompt('Please enter your password:');
    }
    if (counter == 3) {
        alert('Your account has been blocked!');
    } else {
        alert('Thank you for providing the right password!');
    }
}

