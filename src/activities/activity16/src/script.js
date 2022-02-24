function mutation(arr) {
    const arr1 = arr[0].toLowerCase();
    const arr2 = arr[1].toLowerCase();
  
    for (let i = 0; i < arr2.length; i++) {
      const match = arr1.indexOf(arr2[i]);
  
      if (match === -1) {
        return false;
      }
    }
    return true;
}

// Test Cases
console.log(mutation(["hello","hey"])); // false
console.log(mutation(["hello","Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba","qrstu"])); // true
console.log(mutation(["Mary","Army"])); // true
console.log(mutation(["Mary","Aarmy"])); // true
console.log(mutation(["Alien","line"])); // true
console.log(mutation(["floor","for"])); // true
console.log(mutation(["hello","neo"])); // false
console.log(mutation(["voodoo","no"])); // false
console.log(mutation(["ate","date"])); // false
console.log(mutation(["Tiger","Zebra"])); // false