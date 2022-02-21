function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}
// Test Cases
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 6
console.log(findLongestWord('May the force be with you')); // 5
console.log(findLongestWord('Google do a barrel roll')); // 6
console.log(findLongestWord('What is the average airspeed velocity of an unladen swallow')); // 8
console.log(findLongestWord('What if we try a super-long word such as otorhinolaryngology')); // 19