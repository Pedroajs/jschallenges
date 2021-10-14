// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string


function countChar(str1, str2){

    let counter=0;
    for(let i = 0; i < str2.length; i++){
        if(str2[i] === str1) counter++;
    }
    return counter;
}

console.log(countChar('m', 'How many times does the character occur in this sentence?'));