// Address Object
// address object with 3 prop, street, city, zipcode, 
// function showAddress(address), display all props in object

let address = {
    street: 'Hay Lane',
    city: 'London',
    zipcode: '77095'
};

function showAddress(address){
        for (let keys in address) {
            console.log(keys, address[keys]);
    }
};

showAddress(address);


// Factory and Constructor Functions
// initialize address object, using factory and constructor function

// Factory
function createAddress(address){
    return {
        address
    }
}
console.log(address);

// Constructor 
function Address(address){
    this.address = address;
}
console.log(address);