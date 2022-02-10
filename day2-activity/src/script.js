const temp = prompt('Write your temperature');

// 37.3 up high
// 36.5-37.2 normal
// 36.4 below low

if(temp <= 36.4){
    alert('Your temperature is low');
} else if (temp <= 37.2) {
    alert('Your temperature is normal');
} else {
    alert('Your temperature is high');
}