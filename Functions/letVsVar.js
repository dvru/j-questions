function start() {
    for (var i = 0; i < 5; i++){
        if(true){
            var color = 'red';
        }
    }

    console.log(color);
};

start();

// let is not accessible outside the scope
// var is accessable outside the scope

// var => function scope variables
// ES6: let, const => block-scoped

// avoid var, it create varibles that are function scope not block scope