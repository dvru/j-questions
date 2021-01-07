// function Declaration
function walk() {
    console.log('walk');
}
walk();

// Anoymous function Expression
let run = function() {
    console.log('run');
};
let move = run;
run();
move();

// Named function Expression
let jog = function walk() {
    console.log('run');
};

// You can call function that is defined before the function declarations
// and only after a function expression 