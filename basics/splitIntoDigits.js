// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting


function splitIntoDigits(number){
     let num = number.toString();
        
    let numArray = [...num];
    
    let filteredArray = numArray.filter((char=> char !== '.'));
    if(filteredArray) return filteredArray
    return numArray;
}

console.log(splitIntoDigits(10.5));
console.log(splitIntoDigits(20.585));
console.log(splitIntoDigits(2010));