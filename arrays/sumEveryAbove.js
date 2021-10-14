// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum
function sumEvryAbov(array, param){
    let newArray = array.filter(item =>  item > param);
    let reducer = (prevValue, currentValue)=> prevValue + currentValue;
    return newArray.reduce(reducer);
}

console.log(sumEvryAbov([1, 2, 3, 4, 5, 6, 7], 2));