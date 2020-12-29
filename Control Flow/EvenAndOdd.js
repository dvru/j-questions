showNumbers(20); // listing numbers from 0 - 10, even and odd, need a for loop to view the numbers from 0 - 10


function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        // if(i % 2 === 0) 
        // console.log(i, 'EVEN');
        // else
        //     console.log(i, 'ODD');

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}