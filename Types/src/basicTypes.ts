var x: number = 10;
var y: number = 20;
var fname : string = 'Saurabh';
var lname : string = "Singh";

var cars: string[] = ["Honda City", "Maruti Alto", "Mahindra Scorpio"];
var address : any = { address: 'Chandigarh', country: 'India' }; 

window.onload = function(){
    x > y ? console.log(x) : console.log(y);
    console.log(this.fName + this.lname);
    console.log('cars:');
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
    console.log('Address Details: ' + address.address + ' ' + address.country);
}