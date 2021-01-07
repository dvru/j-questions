const numbers = [3, 4];

// Adding elements to the End
numbers.push(5, 6);


// Adding elements to the Beginning

numbers.unshift(1, 2);

// Adding elements to the Middle
numbers.splice(2, 0, 'a', 'b'); // index, delete count, numbers to add

console.log(numbers);