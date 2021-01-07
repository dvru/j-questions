const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second]; // [ 1, 2, 3,'a', 4, 5, 6 ]

const copy = [...combined];

console.log(combined);
console.log(copy);
