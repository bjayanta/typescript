// let myTestFunc: (x: string, y: string) => void

let add: (x: number, y: number) => number

add = (a: number, b: number) => {
    console.log(a + b);
    return a + b;
}

let calculation: (x: number, y: number, z: string) => number

calculation = (a: number, b:number, c: string) => {
    if (c === 'add') {
        return a + b
    } else {
        return a - b
    }
}

console.log(calculation(5, 6 , 'minus'));



let userObject: (id: number | string, info: {
    name: string,
    age: number
}) => void

userObject = (id: number | string, data: {
    name: string,
    age: number
}) => {
    
}
