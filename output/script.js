"use strict";
// Example 1:
// let myTestFunc: (x: string, y: string) => void
// Example 2:
let add;
add = (a, b) => {
    console.log(a + b);
    return a + b;
};
// Example 3:
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, 'minus'));
// Example 4:
let userObject;
userObject = (id, data) => {
    console.log(1);
};
