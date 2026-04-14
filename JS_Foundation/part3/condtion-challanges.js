// Check if the number is greater than another number
let num1 = 5;
let num2 = 8;


if (num1 > num2) {
    console.log("num1 is greater than num2");
} else{
    console.log("num2 is greater than num1");
}

// Checking if a string is equal to another string or not

let username = "divy";
let another = "divy";

if (username == another) {
    console.log("Pick another username please");
}

// Checking if a number is variable or not
let score = 44

if (typeof score == 'number') {
    console.log("Yep, This is a number");
} else {
    console.log("Sorry ! This is not a number");
}

// Checking boolean value

let isLoggedin = true;
if (isLoggedin) {
    console.log("It is logged in");
    
} else {
    console.log("It is not logged in");
}

// Checking if an array is empty or not
let arr = [];
console.log(arr.length);

if (arr.length === 0 ) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}
