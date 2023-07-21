export interface IsPlayer {
    name: string;
    // private age: number; // error
    // age: number;
    readonly country: string;

    getAge(): number
    play(): void;
}