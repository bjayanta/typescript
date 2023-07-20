// Variable

// Example 1:
let playerName = "Mashrafi";
let age = 35;

console.log(playerName);

// playerName = 34; // compile time error
// age = "Sakib"; // compile time error

console.log(playerName);


// Example 2:
let playerName2;

playerName2 = "Mashrafi";
playerName2 = 34;

console.log(playerName2);


// Function

// Example 3:
function multiply(a : number, b : number) {
    return a * b;
}

console.log(multiply(10, 5));
// console.log(multiply("Jayanta", 5)); // Error


// Array

// Example 4:
let fruits = ['apple', 'banana', 'orange'];
let fruits2 = [];
let fruits3 = ['apple', 3, true];

// fruits.push(34); // error

fruits2.push(34);
fruits2.push("Mango");

// Error
// fruits3.push({
//     name: "Sakib"
// })


// Object

// Example 5:
let person = {
    name: "Mashrafi",
    age: 35,
    isCaptain: true
};

// person.country = "Bangladesh"; // Error