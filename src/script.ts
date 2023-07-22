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

const addID = <T extends {
    name: string,
    age: number
}>(obj: T) => {
    let id = Math.floor(Math.random() * 100)
    return { ...obj, id}
}

let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
})

// console.log(user);

// Error
// let user = "Jayanta"
// addID(user)



// Example 2:
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const res1: APIResponse<object> = {
    status: 200,
    type: 'good',
    data: {
        name: "Jayanta",
        age: 300
    }
    // data: "Hello", // Error
}