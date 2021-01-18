function Circle(radius) {
    this.radius = radius;

    let location = {x: 0, y: 0};

    this.getLocation = function() {
        return location;
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'location', {
        get: function() {
            return location;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid Location');
            location = value;
        }
    });
}

const circle = new Circle(10);
circle.location = 1;
circle.draw();
// console.log(circle.getLocation());

// Use object.defineProperty to define getters and or setters