// Prototype vs Instance Members;

function Circle(radius) {
    // Instance members
    this.radius = radius;
}
// Prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);
