function validatePIN (pin) {
    //return true or false
    
    return typeof pin === 'String' &&
    Number.isInteger(pin) &&
    [4, 6].includes(pin.length); 
    
    
  }