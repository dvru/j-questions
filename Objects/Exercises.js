// Address Object
// address object with 3 prop, street, city, zipcode, 
// function showAddress(address), display all props in object

const address = {
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