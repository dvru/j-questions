const ingredients = ['salt', 'pepper', 'spinach', 'mushrooms'];

ingredients.push('garlic');
ingredients.unshift('onions');
ingredients.splice(2, 0, 'olives');

console.log(ingredients);