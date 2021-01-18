function Circle(radius) {
    this.radius = radius;

    this.location = {x: 0, y: 0};

    let optimizeLocation = function(factor){

    }

    this.draw = function() {
        optimizeLocation(0.1);
        
        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();