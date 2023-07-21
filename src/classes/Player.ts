export class Player {
    // Method + Parameters
    constructor(
        private name: string, 
        public age: number, 
        readonly country: string) {}

    // Method
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}