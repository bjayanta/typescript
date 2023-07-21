"use strict";
// Example 1:
// Class
class Player {
    // Method + Parameters
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    // Method
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
// Object
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Sakib', 38, 'Bangladesh');
// Get public properties
console.log(sakib.age);
// Change public properties
sakib.age = 100;
console.log(sakib.age);
// Get private properties
console.log(sakib.name); // error
sakib.name = "Jayanta"; // error
// Get readonly properties
console.log(sakib.country);
sakib.country = "England"; // error
// Example 2:
class Human {
    // Method + Parameters
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // Method
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
// Object
const jayanta = new Human('Jayanta', 400, 'Bangladesh');
console.log(jayanta);
