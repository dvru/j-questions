const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

1
// const another = {};
// for( let key in circle)
// another[key] = circle[key];

2
// const another = Object.assign({
//     color: 'yellow'
// }, circle);

3
const another = { ...circle};

console.log(another);