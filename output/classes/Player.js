export class Player {
    // Method + Parameters
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    // Method
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
