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
const numbers = [1, 2, 3, 4, 1];

// console.log(includes(numbers, 1))

function includes(array, searchElement){
    for(let element of array)
        if (element === searchElement)
            return true;
        return false;
}


// Except
// numbers array, 
// except function, that takes and array one and another array
// function returns new array without the second array

// const output = except(numbers, [1, 2, 4, 3])

function except( array, excluded){
    const output = [];
    for(let element of array)
        if(!excluded.includes(element)) // check if current element is not in the excluded array
            output.push(element); // then push element in output array
    return console.log(output);

}



// Moving an element 
// 1, 2, 3, 4
// remove from array
// then place that element back into the array
// store element to put back into array

const output = move(numbers, 0, 1); // numbers array, first element, 1 postion to right

console.log(output);

function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid Offset');
        return;
    }


    const output = [...array]; 
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
    
}


//Count Occurance
// function countoccurance, two params, array and search element
// check if number is in array
// check count, number within array

const count = countOccurances(numbers, 1);
console.log(count);

function countOccurances(array, searchElement){
    // let count = 0;
    // for(let element in array)
    //     if(element === searchElement)
    //     count++;
    // return count;

    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurance
}, 0);
}

// 0 1 1
// 1 2 1
// 1 3 1
// 1 4 1
// 1 1 1
// 2

//Get Max
//Create get max function, with  given array, and returns the max;

const max = getMax([1, 2, 2, 1, 3]);
console.log(max);

function getMax(array){
    if (array.length === 0) return undefined;

    // let max = array[0]; 
    // for (let i = 1; i < array.length; i++)
    //     if(array[i] > max)
    //         max = array[i];
    // return max;

    return array.reduce((a, b) => (a > b) ? a : b);
    }


    