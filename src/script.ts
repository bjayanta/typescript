// Class
class Player {
    // Instance variables
    name: string;
    age: number;
    country: string;

    // Method + Parameters
    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    } 

    // Method
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }

}

// Object
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh')
const sakib = new Player('Sakib', 38, 'Bangladesh')

// Custom type
const players: Player[] = [];

// players.push('Sakib') // error
players.push(mashrafi)
players.push(sakib)

console.log(players);
