// Example 1: Object
// Normal way
// function drawRectangle(options : {
//     width: number,
//     length: number
// }) {
//     let width = options.width;
//     let length = options.length;
// }

// drawRectangle({
//     width: 30,
//     length: 20,
// })

// Create interface
interface RectangleOptions {
    width: number;
    length: number;
}

// User interface
function drawRectangle(options : RectangleOptions) {
    let width = options.width;
    let length = options.length;
}

// Error
// drawRectangle({
//     width: 30,
//     length: 20,
//     height: 10
// })

let threeDOptions = {
    width: 30,
    length: 20,
    height: 10
}

drawRectangle(threeDOptions)


// Example 2: on Class
import { IsPlayer } from "./Interfaces/IsPlayer.js";
import { Player } from "./classes/Player.js";

// Object
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
let sakib : IsPlayer;

sakib = new Player("Sakib", 35, "Bangladesh")

const players: IsPlayer[] = [];

players.push(sakib)
players.push(mashrafi)