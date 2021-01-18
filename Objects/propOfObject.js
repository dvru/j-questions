const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Enumarate Property
for (let key in circle){
    console.log(key); // radius, draw
    console.log(key, circle[key]); // value of key in circle obj
}

// for of, only iterate within arrays, grab the keys of the object circle and return key
for (let key of Object.keys(circle)){
    console.log(key);
}

for (let entry of Object.entries(circle))
    console.log(entry);
// [ 'radius', 1 ]
// [ 'draw', [Function: draw] ]

if ('radius' in circle) console.log('yes')