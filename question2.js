const getMissingNumber = (num) => {
  
    const newNumbers = [... new Set(num)];
    const n = newNumbers.length;
  
    newNumbers.sort((a, b) => a - b);
  
    if (newNumbers[0] !== 0) {
      return "Your array doesn't start with 0";
    }
  
    if (newNumbers[n-1]===n-1) return n; 
  
    for (let i = 0; i < newNumbers.length; i++) {
      if (newNumbers[i] !== i) {
        return  i;
      }
    }
  }