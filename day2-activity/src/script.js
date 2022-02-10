// Temperature activity

function getTemperature() {
    const temp = prompt('Write your temperature');
    if(temp <= 36.4){
        alert('Your temperature is low');
    } else if (temp <= 37.2) {
        alert('Your temperature is normal');
    } else {
        alert('Your temperature is high');
    }
  }