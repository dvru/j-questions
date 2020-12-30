const message = 'This is my\n' + '\'first\' message';

console.log(message);

// ES6
const another = 
`this is my 
first message`;

console.log(another);


const now = new Date();
const date1 = new Date('May 11, 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);


console.log(now.toDateString()); //Wed Dec 30 2020
console.log(now.toTimeString()); //15:06:25 GMT-0600 (Central Standard Time)

now.setFullYear(2020);
// Wed Dec 30 2020
// 15:06:46 GMT-0600 (Central Standard Time)
