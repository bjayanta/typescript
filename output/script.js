import { Player } from "./classes/Player.js";
// Object
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Sakib', 38, 'Bangladesh');
console.log(sakib.age);
console.log(sakib.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
