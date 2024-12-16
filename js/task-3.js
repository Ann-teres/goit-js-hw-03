function filterArray(numbers, value) {

  const result = [];
  
 
  for (let number of numbers) {
   
    if (number > value) {
      result.push(number);
    }
  }
  

  return result;
}