// Array from Range
// arrayfromrange function, take 2 params, min and max, when run, you return an array from the range 
// empty array for initial array
// for loop to loop though array

const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

function arrayFromRange(min, max){
    const output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
        return console.log(output);
}



