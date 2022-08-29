export class Main {
    
    constructor() { }

    public init(): void {
        const greetings = document.createElement('h1');
        greetings.innerText = "Greetings traveler!";
        document.body.appendChild(greetings);
    }
}