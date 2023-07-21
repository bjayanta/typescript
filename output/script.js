"use strict";
// Normal
// const userDetails = (
//     id: string | number,
//     user: {name: string; age: number}
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);  
// }
// How to use type aliases?
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
};
