const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const recipes = [
    { id: 1, name: 'pepper'},
    { id: 2, name: 'salt'},
];

//Arrow Functions
const course = courses.find(course => course.name === 'a');

const ingredient = recipes.find(ingredient => ingredient.name === 'pepper');

console.log(course);
console.log(ingredient);

// no params, empty params () => {}