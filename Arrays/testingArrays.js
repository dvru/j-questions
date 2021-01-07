const numbers = [1, -1, 2, 3];

// check every elements matches the given condition
// const allPositive = number.every(function(value) { 
//     return value >= 0;
// });

// check only some elements or atleast one element
const atleastOneElement = numbers.some(function(value) {
    return value >= 0;
});

console.log(atleastOneElement);