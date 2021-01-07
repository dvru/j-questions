// Iterating through array

const ingredients = ['salt', 'pepper', 'spinach', 'mushrooms'];

for (let ingredient of ingredients){
    console.log(ingredient);
}

ingredients.forEach(function(ingredient){
    console.log(ingredient);
})

ingredients.forEach((ingredient, index) => console.log(index, ingredient));
