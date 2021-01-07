// supply default values of a function

// calculating total interest

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));

// rate = rate || 3.5; // set variable default value
// years = years || 5;


// principal: 10000
// rate: 3.5
// years: 5