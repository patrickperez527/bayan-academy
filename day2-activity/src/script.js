// Temperature activity

const form = document.querySelector('#my-form');
const inputTemp = document.querySelector('#temp');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(inputTemp.value === '') {
        alert('Please input your temperature');
    } else if (inputTemp.value <= 36.4) {
        alert('Your temperature is low');
    } else if (inputTemp.value <= 37.2) {
        alert('Your temperature is normal');
    } else {
        alert('Your temperature is high');
    }
})

