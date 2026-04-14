/* 
1. Write a loop that calculates the sum of all the numbers 
    from 1 to 5 and stores the result in a variable named 'sum'
*/

let sum = 0;
let a = 0;

while (a <= 5 ) {
    sum+=a;
    a++;
}
console.log("1. Addition of first five numbers is : " + sum);


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the number 
in an array named `countdown`.
*/

let countdown = []; // Empty array to store the numbers
let b = 5;          // Initial value for comparision

// While loop - If the value of b is less than or equal to 1 then add 
// it to the array, also decrement the value
while (b >= 1) {    
    countdown.push(b);                      // Pushing the element in the array 
    console.log("Element added : " + b);    // Displaying the element
    b--;                                    // Decrements the value of `b` by 1
}
console.log("Final Array : "+ countdown);   // Final Array


/*
3. Write a `do-while` loop that prompts the user to enter their favourite 
tea type until they enter `stop`.
Store each tea type in an array named `teaCollection`
*/

let teaCollection = [];                     // Declaring empty array 
let userInput;                              // Empty


 
// Do - get user input 
//  if condition - if the input is not stop then add it to the array
// while - user input is not stop, continue

// do {
//     // userInput = prompt(`Enter your favourite tea (type stop to exit) : `); {Uncomment to run on browser console}
//     // userInput.toLowerCase;                  // Convert the user input to lowercase
//     if (userInput !== "stop") {
//         teaCollection.push(userInput);        
//     }
// } while (userInput !== "stop");


/*
4. Write a do while loop that adds numbers from 1 to 3 and stores the result
in a variable named `total`. 
*/

let total = 0;            // Defining empty variable
let c = 1;

do {
    total+=c;
    c++;
} while (c <= 3);
console.log("The total : " + total);

/*
5. Write a `for loop` that multiplies each element in the array
`[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`
*/

let array = [2,4,6];
let multipliedNumbers = [];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    multipliedNumbers.push(element*2);
}
console.log("Multiplied array : " + multipliedNumbers);

/*
6. Write a `for loop` that lists all the cities in the array 
`["Paris", "New York", "Tokyo", "London"]` and stores each city in a 
new array named `cityList`.
*/

let cities = ["Paris", "New York","Tokyo","London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    cityList.push(element);
}
console.log(cityList);
