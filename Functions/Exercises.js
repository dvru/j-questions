// create function of sum, that passes arguments
// check if is an array using Array.isArray()

console.log(sum(1, 2, 3, 4));

function sum(...items) {
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]]
    return items.reduce((a, b) => a + b);
}

// Area of Circle
// circle.radius = 2;
// console.log(circle.area);

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);