// Write a function that takes an array of strings as argument
// It should return the longest string

function returnLongestString(array){
    let newArray = array;

    let currentStr = newArray[0]; 
    for(let i = 1; i <= newArray.length; i++){
        if( newArray[i].length > currentStr.length ) return currentStr = newArray[i] ;
    }
    return currentStr;
}

console.log(returnLongestString(['help', 'me', 'tagamandapio']));
console.log(returnLongestString('I','need', 'candy'));