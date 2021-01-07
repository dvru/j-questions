let ingredients = ['salt', 'pepper', 'spinach', 'mushrooms'];
let another = ingredients;

// Solution 1
// ingredients = [];

// Solution 2
// ingredients.length = 0;

// Solution 3
// ingredients.splice(0, ingredients.length);

// Solution 4
while (ingredients.length > 0)
ingredients.pop();


console.log(ingredients)
console.log(another);