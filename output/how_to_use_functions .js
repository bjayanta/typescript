"use strict";
// const myFunc = () => {
//     console.log("Hello");
// }
let myFunc;
myFunc = () => {
    console.log("Hello");
};
// myFunc = 10; // error
const yourFunc = (a, b, c) => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
};
yourFunc('A', 'B');
