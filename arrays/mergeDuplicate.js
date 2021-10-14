// Write a function t both arrays and remove duplicate values
// Sort the merge result in aschat takes two arrays as arguments
// Mergeending order
// Return the resulting array

function mergeDuplicateArrays(arr1, arr2){
   let newArray = [...arr1,...arr2];

   for(let i = 0; i < newArray.length; i++){
    for(let j = i + 1;j < newArray.length; j++){
        if(newArray[i] === newArray[j]){
            newArray.splice(j--, 1);
        }
    }
   }

    return newArray;
}

console.log(mergeDuplicateArrays([1,1, 2, 3], [3,4, 5]));