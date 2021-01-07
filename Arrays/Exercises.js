// Array from Range
// arrayfromrange function, take 2 params, min and max, when run, you return an array from the range 
// empty array for initial array
// for loop to loop though array

// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

function arrayFromRange(min, max){
    const output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
        return console.log(output);
}

// Includes
//create function called includes, takes an array and search element.
// iterate through and check if that element is === to the search element return true
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1))

function includes(array, searchElement){
    for(let element of array)
        if (element === searchElement)
            return true;
        return false;
}



