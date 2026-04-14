/*
1. Declare an array named "teaFlavors' that contains the strings '"green tea"' tea"•
, "black tea", and '"oolong
Access the first element of the array and store it in a variable named 'firstTea'.
*/

console.log("\n");
console.log("1");
console.log("\n");

let teaFlavors = ["Green Tea", "Tea", "Black Tea", "Oolong Tea"]
let firstTea = teaFlavors[0];
console.log("The first element of the array : "+firstTea);



/*
2. Declare an array named 'cities' containing
'"London"', '"Tokyo"', '"Paris"'
'"Paris"', and '"New York"'.
Access the third element in the array and store it in a variable named 'favoriteCity'
*/

console.log("\n");
console.log("2");
console.log("\n");

let cities = ["London", "Tokyo", "Paris","New York"];
let favouriteCity = cities[1];
console.log("Favourite City : " + favouriteCity);


/*
3. You have an array named 'teaTypes' containing
'"herbal tea"', '"white tea"' , and '"masala chai"'.
Change the second element of the array to '"jasmine tea"
*/

console.log("\n");
console.log("3");
console.log("\n");

let teaTypes = ["Herbal Tea", "White Tea", "Masala Chai"];
teaTypes[1] = "Jasmine Tea";    // This is where the value gets changed
console.log("Changed element is second : " + teaTypes);


/*
4. Declare an array named 'citiesVisited' containing
'"Mumbai"' and '"Sydney"'
Add '"Berlin"' to the array using the 'push' method. */

console.log("\n");
console.log("4");
console.log("\n");

let citiesVisited = ["Mumbai", "Sydney"];
// Before addition
console.log("Before adding the third element : "+citiesVisited);

// Adding the element 
citiesVisited.push("Berlin");   // -> push() : adds element at the end of an array

//After adding the element
console.log("After addding the third element : "+citiesVisited);


/*
5. You have an array named 'teaorders' with '"chai"',
'"iced tea"', '"matcha"', and '"earl grey"'.
Remove the last element of the array using the 'pop' method and store it in a variable named 'lastorder'.
*/

console.log("\n");
console.log("5");
console.log("\n");


let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"];
// Before removing the element
console.log("Before removing the element : " + teaOrders);

// Removing the element
teaOrders.pop() // -> pop() : Removes the last element of the array

// After removing the element
console.log("After removing the element : " + teaOrders);




/*
6. You have an array named 'popularTeas' containing
''green tea"',
'"oolong tea"', and ''chai"'.
Create a soft copy of this array named
'softCopyTeas'
*/

console.log("\n");
console.log("6");
console.log("\n");

let popularTeas = ["green tea", "oolong Tea", "chai"];
let softCopyTeas = popularTeas; // -> This creates a copy of the array 'popularTeas'
console.log(softCopyTeas);

/*
7. You have an array named 'topCities' containing
'"Berlin"'
'"Singapore"', and
, and '"New York"'.
Create a hard copy of this array named
'hardCopyCities'
*/

console.log("\n");
console.log("7");
console.log("\n");

let topCities = ["Berlin","Singapore", "New York"];
let hardCopyCities = [...topCities]; // -> This creates a hardcopy of the array 'topCities'
topCities.pop();
console.log(hardCopyCities);


/*
8. You have two arrays: 'europeanCities' containing
'"Paris"' and '"Rome"', and 'asianCities' containing
'"Tokyo"' and '"Bangkok"'.
Merge these two arrays into a new array named
'worldcities'
*/

console.log("\n");
console.log("8");
console.log("\n");

let europeanCities = ["Paris","Rome"];
let asianCities = ["Tokyo","Bangkok"];

// let worldcities = europeanCities + asianCities;
let worldcities = europeanCities.concat(asianCities);
console.log(worldcities);

