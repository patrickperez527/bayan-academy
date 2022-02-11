// Temperature activity

const form = document.querySelector('#my-form');
const inputTemp = document.querySelector('#temp');
const tempMsg = document.querySelector('#msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    // this is for white spaces 
    inputTemp.value =inputTemp.value.replace(/^\s+|\s+$/g, "");

    if(inputTemp.value == '') {
        // returns if the input field is blank
        // alert('Input field cannot be blank.');
        tempMsg.innerText = 'This field cannot be blank.';
    } else if (inputTemp.value <= 36.4) {
        // 36.4 below = low temperature
        // alert('Your temperature is low');
        tempMsg.innerText = 'Your temperature is low.';
        inputTemp.value = '';
    } else if (inputTemp.value <= 37.2) {
        // 36.5 - 37.2 = normal temperature
        // alert('Your temperature is normal');
        tempMsg.innerText = 'Your temperature is normal.';
        inputTemp.value = '';
    } else if (inputTemp.value >= 37.3){
        // 37.3 and above = high temperature
        // alert('Your temperature is high');
        tempMsg.innerText = 'Your temperature is high.';
        inputTemp.value = '';
    } else {
        // returns if you enter a string
        // alert('Invalid temperature');
        tempMsg.innerText = 'Invalid input.';
    }   
})

