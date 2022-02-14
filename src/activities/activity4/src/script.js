function getTemperature(tempValue){
    if(tempValue >= 37.2){
        return 'High Temperature';
    } else if (tempValue >= 36.4) {
        return 'Normal Temperature';
    } else {
        return 'Low Temperature';
    }
}

console.log(getTemperature());

