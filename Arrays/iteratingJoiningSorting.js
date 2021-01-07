// Iterating through array

const ingredients = ['salt', 'pepper', 'spinach', 'mushrooms'];

courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javaScript.js'}
]


for (let ingredient of ingredients){
    console.log(ingredient);
}

ingredients.forEach(function(ingredient){
    console.log(ingredient);
})

ingredients.forEach((ingredient, index) => console.log(index, ingredient));

// Joining
const join = ingredients.join(',');
console.log(join);
//salt,pepper,spinach,mushrooms

const message = 'This is my message';
const parts = message.split(' ');
console.log(parts);
//[ 'This', 'is', 'my', 'message' ]


// Sorting
ingredients.sort();
console.log(ingredients); 
// sorted alpha
//[ 'mushrooms', 'pepper', 'salt', 'spinach' ]

ingredients.reverse();
console.log(ingredients); 
//[ 'spinach', 'salt', 'pepper', 'mushrooms' ]

courses.sort(function(first, second){

    const nameFirst = first.name.toLowerCase();
    const nameSecond = second.name.toLowerCase();

    if (nameFirst < nameSecond) return -1;
    if (nameFirst > nameSecond) return 1;
    return 0;
});
console.log(courses);
// [ { id: 2, name: 'JavaScript.js' }, { id: 1, name: 'Node.js' } ]