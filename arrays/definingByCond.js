// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array


function redefineAray (array, number){
    let newArray =[];
    array.map(item =>{
        if(number >= 6){
            newArray[0] = number;
        } else{
            newArray[0] = 0;
        }
        newArray.push(item);
    });
    return newArray;
}
console.log(redefineAray([1,2,3], 6));
console.log(redefineAray(['a','b'], 2));