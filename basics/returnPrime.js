// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number
function isPrime(number){
    if(number < 2) return false;
    for(let i = 2; i < number; i++){
        if(number % i === 0) return false;
    }
    return true;
}

function returnPrimeNum(number){
    if(isPrime(number)){
        return number                                    
    } else {                                                                                                                                                      
      
        let counter = 0;
        let newPrime = number
        while(isPrime(newPrime)){ 
            counter++;
            newPrime +=counter;
            return newPrime;
            

        }                                                                                               
    }
}


console.log(returnPrimeNum(7));
console.log(returnPrimeNum(38));
console.log(isPrime(39))

