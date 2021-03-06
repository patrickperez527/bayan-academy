// Temperature activity

const form = document.querySelector('#my-form');
const inputTemp = document.querySelector('#temp');
const tempMsg = document.querySelector('#msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    // this is for white spaces 
    inputTemp.value = inputTemp.value.replace(/^\s+|\s+$/g, "");

    if(inputTemp.value == '') {
        // returns if the input field is blank
        // alert('Input field cannot be blank.');
        tempMsg.innerText = 'Temperature field cannot be blank.';
    } else if (inputTemp.value < 36.5) {
        // 36.5 below = low temperature
        // alert('Your temperature is low');
        tempMsg.innerText = 'Your temperature is low.';
        inputTemp.value = '';
    } else if (inputTemp.value <= 37.2) {
        // 36.5 - 37.2 = normal temperature
        // alert('Your temperature is normal');
        tempMsg.innerText = 'Your temperature is normal.';
        inputTemp.value = '';
    } else if (inputTemp.value > 37.2){
        // 37.2 above = high temperature
        // alert('Your temperature is high');
        tempMsg.innerText = 'Your temperature is high.';
        inputTemp.value = '';
    } else {
        // returns if you enter a string or special characters
        // alert('Invalid temperature');
        tempMsg.innerText = 'The temperature must be an integer or a float!';
    }   
})

