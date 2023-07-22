"use strict";
// Generics
// Example 1:
// const addID = (obj: object) => {
//     let id = Math.floor(Math.random() * 100)
//     return { ...obj, id}
// }
// const addID = <T extends object>(obj: T) => {
//     let id = Math.floor(Math.random() * 100)
//     return { ...obj, id}
// }
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
});
const res1 = {
    status: 200,
    type: 'good',
    data: {
        name: "Jayanta",
        age: 300
    }
    // data: "Hello", // Error
};
