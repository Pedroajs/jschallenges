// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// incompleto
function mergeArrays(array){
  let reducer = (prevValue, currentValue) => [prevValue, currentValue];
  let funcArray = array.reduce(reducer);
  return funcArray;

    
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

