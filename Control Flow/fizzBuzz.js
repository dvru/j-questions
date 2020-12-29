// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
 if(typeof input !== 'number'){
    return NaN;
 }
 else if ((input % 3 === 0) && (input % 5 == 0)){
    return 'FizzBuzz';
 }
 else if (input % 3 === 0){
    return 'Fizz';
 }
 else if(input % 5 == 0){
    return 'Buzz';
 }
    return input;
 }
 

 //check if the input is a valid number
 //check if the input is divivible by 3 and 5
 // then check individually for 'fizz' and 'buzz