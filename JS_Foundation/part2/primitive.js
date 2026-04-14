// Number

let balance = 120.23
console.log(typeof(balance)); // -> Returns datatype of the variable

let anotherBalance = new Number(123);
console.log(typeof(anotherBalance)); // -> Returns datatype of the variable
console.log(anotherBalance.valueOf()); // -> Returns value of the variable

// Boolean
let isActive = true
let isReallyactive = new Boolean(true) 
console.log(typeof(isActive)); // -> Returns datatype of the variable
console.log(isReallyactive.valueOf());

// String
let myString = "Hello"
let myStringOne = 'Hola'
let username = ' Divy'

let oldGreet = myStringOne + username

console.log(oldGreet);

let greetMessage = `Hello ${username}`
console.log(greetMessage);
