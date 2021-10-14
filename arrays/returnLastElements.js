// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all


function returnLastElements(array, param){
    if(array.length < param) return array;
    const index = array.length - (param);
    return array.splice(index, param);


}

console.log(returnLastElements([1, 2, 3, 4, 5], 2));
console.log(returnLastElements([1,2,3],6));