function sum(...args){
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10));

// When we apply the rest operator to a param of a function, we can pass a varying number of
// arguments, and the rest op, will take all of them and put in an array.

// Same as arguments.js example.


function sum(discount, ...prices){
    let total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// total = 20 + 30 = 50
// 50 * (1 - 0.1)
// 45
