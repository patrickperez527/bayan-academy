// Temperature activity

const form = document.querySelector('#my-form');
const inputTemp = document.querySelector('#temp');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(inputTemp.value === '') {
        // returns if the input field is blank
        alert('Please input your temperature');
    } else if (inputTemp.value <= 36.4) {
        // 36.4 below = low temperature
        alert('Your temperature is low');
    } else if (inputTemp.value <= 37.2) {
        // 36.5 - 37.2 = normal temperature
        alert('Your temperature is normal');
    } else if (inputTemp.value >= 37.3){
        // 37.3 up = high temperature
        alert('Your temperature is high');
    } else {
        // returns if you enter a string
        alert('Invalid temperature');
    }
})

