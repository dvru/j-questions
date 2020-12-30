// show stars on each rows

showStars(10); // 5 rows, depend on each row

function showStars(rows){
    for (let row = 1; row <= rows; row++){ // as long as row is less than the equal of rows, increment row
        let pattern = ''; // string of star
        for (let i = 0; i < row; i++) // increment pattern
            pattern += '*'; // add a star pattern
        console.log(pattern);
    }
}
