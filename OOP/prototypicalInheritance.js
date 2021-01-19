// Shape Constructor
function Shape(color) {
    this.color = color;
}

// Shape duplicate method on prototype
Shape.prototype.duplicate = function() {
    console.log('duplicate') 
}

//Extend Function
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Circle Construcor
function Circle(radius, color) {
    Shape.call(this, color);
    // Instance members
    this.radius = radius;
    
}
// circle inherits from shape
extend(Circle, Shape);

// Shape duplicate method on prototype
Circle.prototype.duplicate = function() {
    console.log('duplicate circle') 
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

// Square Construcor
function Square(size) {
    this.size = size;
}
// square inherits from shape
extend(Square, Shape);


const s = new Shape();
const c = new Circle(1, 'red');

