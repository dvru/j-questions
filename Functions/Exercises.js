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

// Error Handling
try{
    const numbers = (1, 2, 3, 4);
    const count = countOccurances(true, 1);
    console.log(count);
}
catch(e){
    console.log(e.message);
}

function countOccurances(array, searchElement){
   if(!Array.isArray(array))
    throw new Error('Invalid array');

    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurance
}, 0);
}