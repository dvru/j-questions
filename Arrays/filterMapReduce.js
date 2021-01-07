// Filtering
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });

const filtered = numbers.filter(n => n >= 0);

console.log(filtered)


// Mapping Strings
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// Mapping Objects
const items = filtered.map(n => {
    const obj = {value: n};
    return obj;
});

console.log(items);
//[ { value: 1 }, { value: 2 }, { value: 3 } ]

const item = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter (obj => obj.value > 1)
    .map(obj => obj.value);

console.log(item);
//chaining methods