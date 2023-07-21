"use strict";
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
// Custom type
const players = [];
// players.push('Sakib') // error
players.push(mashrafi);
players.push(sakib);
console.log(players);
