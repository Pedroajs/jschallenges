// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function checksArray(array){
    
    let newArray = array;
    for(let i = 1; i < newArray.length; i++){
        let currentElement = newArray[0];
        return currentElement === newArray[i] ? true : false;
    }
}

console.log(checksArray([0,0,0,0,0]));
console.log(checksArray([{}, {}]));
console.log(checksArray([0,'0',0, false]));
console.log(checksArray(['pedro', 'juliana']));