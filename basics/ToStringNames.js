function list(names){
    //your code here
    
    let leng = names.length;
    if(leng == 0) return '';
    
    return names.slice(0, leng - 1).map(item => item.name).join(', ') + (leng > 1 ? ' & ':'') + names[leng -1].name;
    
  }