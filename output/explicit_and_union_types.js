"use strict";
let a;
a = "Jayanta";
// a = 10; // error
let b;
b = 10;
// b = true; // error
// array:
let c = [];
c.push("abc");
// c.push(10); // error
let d = [];
d.push("Biswas", 120);
// d.push("Biswas", 120, true); // error
let e = [];
e.push(10, true, "name", 5.2, null, undefined);
// object
let f;
f = [10, "abc", true];
f = {
    name: "Jayanta",
    age: 75,
    isStudent: false
};
let g;
// Error
// g = {
//     name: "Jayanta",
//     age: "80",
//     isStudent: true,
// }
