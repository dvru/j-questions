//String Primitive
const message = 'This is my first message';


const another = new String('hi')

console.log(typeof message); // string
console.log(typeof another); // object

console.log(message.length); // 24
console.log(message[1]); // h
console.log(message.includes('is')); // true