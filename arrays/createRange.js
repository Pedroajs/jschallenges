// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function createRangeOfNum(min, max){
    let newArray = [];
    for(let i = min; i >= min && i <= max; i++){
        newArray.push(min++);
    }
    return newArray;
}
console.log(createRangeOfNum(2,10));