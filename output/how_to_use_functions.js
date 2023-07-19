"use strict";
// const myFunc = () => {
//     console.log("Hello");
// }
let myFunc;
myFunc = () => {
    console.log("Hello");
};
// myFunc = 10; // error
// Optional parameter c
const yourFunc = (a, b, c) => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
};
// yourFunc('A', 'B');
// Set default value
const yourFunc1 = (a, b, c = "Test") => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
};
// yourFunc1('A', 'B');
// Return type
const yourFunc2 = (a, b, c = "Test") => {
    return a + b;
};
console.log(yourFunc2('A', 'B'));
