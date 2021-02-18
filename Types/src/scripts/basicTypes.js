var x = 10;
var y = 20;
var fname = 'Saurabh';
var lname = "Singh";
var cars = ["Honda City", "Maruti Alto", "Mahindra Scorpio"];
var address = { address: 'Chandigarh', country: 'India' };
window.onload = function () {
    x > y ? console.log(x) : console.log(y);
    console.log(this.fName + this.lname);
    console.log('cars:');
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
    console.log('Address Details: ' + address.address + ' ' + address.country);
};
