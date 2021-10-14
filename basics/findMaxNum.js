function findMaxNum( input ) {

    let maxNum= input[0];
      for(let i = 1; i < input.length; i++){
            if(input[i] > maxNum){
               maxNum = input[i];
            }
         }
      return maxNum;
}   

console.log(findMaxNum([10,30,40,222])) 