// Filtering
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });

const filtered = numbers.filter(n => n >= 0);

console.log(filtered)

// Map
const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);