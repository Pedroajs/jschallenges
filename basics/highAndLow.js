function highAndLow(numbers){
    // ...
   
    
    for(let i = 1; i < numbers.length; i++)
      {
        for(let j = i-1; j > -1; j--)
        {
          if(numbers[j+1] < numbers[j]){
            
             [numbers[j+1],numbers[j]] = [numbers[j],numbers[j + 1]];
          }
        }
        
      }
    let firstNumber = numbers[0];
    let lastNumber = numbers.lastIndexOf();
    
    return firstNumber;
    
  }

  console.log(highAndLow('10 20 4 0'));