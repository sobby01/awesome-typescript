
//number values
var x: number = 10;
var y: number = 20;
var z = 50.4;

//in case of es2020
//var bigb : bigint = 100000000000;
//const huge = 1n

//boolean value
let isDone: boolean = false;

//string values
var fname : string = 'Saurabh';
var lname : string = "Singh";
let something: any = "Hello World!";

//Array
var cars: string[] = ["Honda City", "Maruti Alto", "Mahindra Scorpio"];
var address : any = { address: 'Chandigarh', country: 'India' }; 
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let arr: any[] = ["John", 212, true];



//Tuple
// Declare a tuple type
let tuple1: [string, number];
tuple1 = ["hello", 10];
//tuple1 = [10, "hello"]; //compile time errors as it is not assignable

window.onload = function(){
    x > y ? console.log(x) : console.log(y);
    var sum = x + z;
    console.log(this.fName + this.lname);
    console.log('cars:');
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
    console.log('Address Details: ' + address.address + ' ' + address.country);
}