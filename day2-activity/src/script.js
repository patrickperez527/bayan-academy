const temp = prompt('Write your temperature');

// 37.3 up high
// 36.5-37.2 normal
// 36.4 below low

if(temp <= 36.4){
    alert('low');
} else if (temp <= 37.2) {
    alert('normal');
} else {
    alert('high');
}