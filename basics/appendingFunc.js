// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function appendFunc(strA, strB){

    for(let i = 0; i = strA.length; i++){
        if(strA[i] === strB){
            return strB+ strA;
        } else{
            return strA + strB;
        }
    }
}

console.log(appendFunc('cheese', 'cake'));
console.log(appendFunc('lips', 's'));
console.log(appendFunc(' think, therefore I am', 'I'))