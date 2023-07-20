// Variable

// Example 1:
let a : string;

a = "Jayanta";
// a = 10; // error

// Example 2:
let b : number;

b = 10;
// b = '10'; // error
// b = true; // error



// Array:

// Example 3:
let c : string[] = [];

c.push("abc")
// c.push(10); // error

// Example 4:
let d: (string | number)[] = []
d.push("Biswas", 120);
// d.push("Biswas", 120, true); // error

// Example 5:
let e : any[] = [];
e.push(10, true, "name", 5.2, null, undefined)



// Object
let f: object;

f = [10, "abc", true]
f = {
    name: "Jayanta",
    age: 75,
    isStudent: false
}

let g: {
    name: string,
    age: number,
    isStudent: boolean
}

// Error
// g = {
//     name: "Jayanta",
//     age: "80",
//     isStudent: true,
// }

// Error
// g = [];
