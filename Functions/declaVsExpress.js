// function Declaration
function walk() {
    console.log('walk');
}

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
