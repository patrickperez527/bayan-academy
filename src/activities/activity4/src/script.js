function getTemperature(tempValue){
    if(tempValue > 37.2){
        // returns high if the temperature is higher than 37.2
        return 'High body temperature';
    } else if (tempValue >= 36.4) {
        // returns normal if the temperature is between 37.2 and 36.4
        return 'Normal body temperature';
    } else {
        // returns low if the temperature is less than or equal 36.3
        return 'Low body temperature';
    }
}
// test 
console.log(getTemperature(38)); // High body temperature
console.log(getTemperature(36.5)); // Normal body temperature
console.log(getTemperature(36.3)); // Low body temperature
