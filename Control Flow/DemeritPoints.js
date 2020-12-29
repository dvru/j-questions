// Speed Limit = 70; if theyre driving under the speed limit, console.log 'ok';
// 5 -> 1 point; for every 5 km above the speed limit, they will get 1 point;
// Math.floor(1.3); // convert it to the greatest integer
// 12 points -> suspended; more than 12 points = suspended
// create a constant for the speed limit 70 since nobody else knows it's 70 expect you

checkSpeed(130);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){ // if speed is less than 75
        console.log('Ok');
        return;
    } 
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points)
}