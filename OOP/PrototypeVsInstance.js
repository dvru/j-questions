// Prototype vs Instance Members;

function Circle(radius) {
    // Instance members
    this.radius = radius;
}
// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius; 
}

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);


// Dont modify objects that you dont own
Array.prototype.shuffle = function () {
    // ..
}
const array = [];
array.shuffle()