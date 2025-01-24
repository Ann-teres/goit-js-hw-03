function slugify(title) {
       return title
        .toLowerCase()                          
        .trim()                               
        .replace(/[^a-z0-9\s-]/g, '')            // Видаляємо всі небажані символи (крім літер, цифр, пробілів та тире)
        .replace(/\s+/g, '-')                    // Заміна всіх пробілів на тире
        .replace(/-+/g, '-');  
        
}

console.log(slugify("Arrays for beginners")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 


