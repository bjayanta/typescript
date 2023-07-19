// const myFunc = () => {
//     console.log("Hello");
// }

let myFunc : Function;

myFunc = () => {
    console.log("Hello");
}

// myFunc = 10; // error

// Optional parameter c
const yourFunc: Function = (a: string, b: string, c?:string) => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
}

// yourFunc('A', 'B');

// Set default value
const yourFunc1: Function = (a: string, b: string, c:string="Test") => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
}

// yourFunc1('A', 'B');

// Return type
const yourFunc2: Function = (a: string, b: string, c:string="Test") : string => {
    return a + b;
}

console.log(yourFunc2('A', 'B'));

