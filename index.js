var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "podi";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    console.log(customerName);
}

function setBestCustomer(){
     bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "karuma-indo";
}