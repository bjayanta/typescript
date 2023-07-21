import { IsPlayer } from "../Interfaces/IsPlayer.js";

export class Player implements IsPlayer {
    // Method + Parameters
    constructor(
        public name: string, 
        public age: number, 
        readonly country: string   
    ) {}

    getAge() {
        return this.age;
    }

    // Method
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}