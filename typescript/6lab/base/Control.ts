export class Control {
    setPosition(x: number, y: number): void {
        console.log(`Вызван метод setPosition у контролла ${this.constructor.name} по (${x}, ${y})`);
    }

    getPosition(): void {
        console.log(`Вызван метод getPosition у контролла ${this.constructor.name}`);
    }
}