function getTemperature(tempValue){
    if(tempValue >= 37.2){
        // returns high if the temperature 37.2 above
        return 'High body temperature';
    } else if (tempValue >= 36.4) {
        // returns normal if the temperature is between 37.1 and 36.4
        return 'Normal body temperature';
    } else {
        // returns low if the temperature is less than or equal 36.3
        return 'Low body temperature';
    }
}
// test it here
getTemperature();