const ingredients = ['salt', 'pepper', 'spinach', 'mushrooms'];

// ingredients.push('garlic');
// ingredients.unshift('onions');
// ingredients.splice(2, 0, 'olives');


// // Remove end
// const last = ingredients.pop();
// console.log(ingredients);
// console.log(last);


// // Remove beginning
// const first = ingredients.shift();
// console.log(ingredients);
// console.log(first);

// Remove Middle
const middle = ingredients.splice(0, 2);
console.log(ingredients);
console.log(middle);