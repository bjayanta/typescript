// Example 1: Object
// Normal way
// function drawRectangle(options : {
//     width: number,
//     length: number
// }) {
//     let width = options.width;
//     let length = options.length;
// }
// User interface
function drawRectangle(options) {
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
};
drawRectangle(threeDOptions);
import { Player } from "./classes/Player.js";
// Object
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
let sakib;
sakib = new Player("Sakib", 35, "Bangladesh");
const players = [];
players.push(sakib);
players.push(mashrafi);
