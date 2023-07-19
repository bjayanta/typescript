"use strict";
// let myTestFunc: (x: string, y: string) => void
let add;
add = (a, b) => {
    console.log(a + b);
    return a + b;
};
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
let userObject;
userObject = (id, data) => {
};
