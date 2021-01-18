function Shape() {
}

Shape.prototype.duplicate = function() {
    return 'Circle with radius ' + this.radius; 
}

function Circle(radius) {
    // Instance members
    this.radius = radius;
}
// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);



