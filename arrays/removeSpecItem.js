// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of 
//the given value and return the the cleaned version

function removeItem(array, param){
    let newArray = array;
    return newArray.filter(value => value != param);
}

console.log(removeItem([1,2,3], 2));