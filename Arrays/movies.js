const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

// Get all the movies in 2018 with rating > 4
// Sort them by their rating, ascending 
// descending order
// Pick thier title
// result 'b', 'a'

// function getMovies(){
    
// }

const titles = movies
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(movie => movie.title)

console.log(titles);

// a < b => -1
// a === b => 0
// a > b => 1