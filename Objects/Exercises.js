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


// Object Equality
// Use the constructor function that we created in the last exercise to create two address objects.
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));
console.log(areSame(address1,address3));

// Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2){
    return address1.street === address2.street &&
           address1.city === address2.city && 
           address1.zipcode === address2.zipcode;
}

function areSame(address1, address2){
    return address1 === address2;
}

