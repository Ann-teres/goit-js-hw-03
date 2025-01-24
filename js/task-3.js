function filterArray(numbers, value) {
  
    const result = [];

    // Проходимо через кожен елемент масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Якщо число більше за значення value, додаємо його в result
        if (numbers[i] > value) {
            result.push(numbers[i]);
        }
    }

  
    return result;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); 
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5)); 
console.log(filterArray([12, 24, 8, 41, 76], 38)); 
console.log(filterArray([12, 24, 8, 41, 76], 20)); 


