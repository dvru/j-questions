// takes an array and returns the number of truthy elements
// False, undefined, null, '', false, 0, NaN

const array = [0, 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array)
        if(value) // true
            count++; // increment
    return count;
}