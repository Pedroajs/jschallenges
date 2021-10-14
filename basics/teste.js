 function myfunc(number){
     if(number/number === 1 && number/1 === number){
         return console.log('is prime');
    } else{
        while(!number/number ===1 && !number/1 === number){
            number++
            let thisNum = number;
            return thisNum;
        }
        
    }

 }

 console.log(myfunc(10));