let a:string;
a = "Jayanta";
// a = 10; // error

let b : number;
b = 10;
// b = true; // error



// array:

let c : string[] = [];
c.push("abc")
// c.push(10); // error

let d: (string | number)[] = []
d.push("Biswas", 120);
// d.push("Biswas", 120, true); // error

let e : any[] = [];
e.push(10, true, "name", 5.2, null, undefined)



// object
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
