// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function calcAverage(array){
   let reducer = (prevValue, currentValue) => prevValue + currentValue;
   return array.reduce(reducer)/array.length;
   
}

console.log(calcAverage([1,2,3]));