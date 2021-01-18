let person = { name: 'Damini'};

console.log(person);
for (let key in person)
    console.log(key)
console.log(Object.keys(person)) // key of prop

let objectBase = Object.getPrototypeOf(person); 
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false, // read only
    enumerable: true, // cannot change
    configurable: false // cannot delete
});

delete person.name

console.log(person);