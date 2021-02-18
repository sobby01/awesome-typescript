let notSure: unknown = 4;
notSure = "maybe a string instead";

console.log(notSure);

// OK, definitely a boolean
notSure = false;
console.log(notSure);

let u: undefined = undefined;
let n: null = null;

//Function returning void
function warnUser(): void {
  console.log("This is my warning message");
}

//The main difference between let and var is that scope of a variable defined with let is limited to the block 
//in which it is declared while variable declared with var has the global scope