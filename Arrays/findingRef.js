const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];


// console.log(courses.includes({id: 1, name: 'a'})); // FALSE

// const course = courses.find(function(course){
//     return course.name === 'x';
// });

const course = courses.findIndex(function(course){
    return course.name === 'a';
});

console.log(course);