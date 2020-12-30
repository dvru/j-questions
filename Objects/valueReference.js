let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

// 10 - value/primitive


let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);

// 11 - reference/object