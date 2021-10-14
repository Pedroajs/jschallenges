// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(object) {
   
    let num = object.number;
    
    let perc = object.percentage;

    return Math.floor(num * (perc/100));
 }

 console.log(myFunction({number:100, percentage:50}));
 console.log(myFunction({number:777, percentage:2}));