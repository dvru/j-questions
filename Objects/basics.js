// OOP: where we see a program as a collection of objects to talk to eachother to perform some sort of functionality

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
circle.draw();

// Factory Function
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);


// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
   
const circle = new Circle(1);


