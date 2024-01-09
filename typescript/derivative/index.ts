abstract class BaseDerivative {
    protected readonly x: number;
    protected readonly h: number;
    protected readonly func: (x: number) => any;
    protected derivative: number;

    protected constructor(x: number, h: number, func: (x: number) => any) {
        this.x = x;
        this.h = h;
        this.func = func;
        this.derivative = 0;
    }

    calculateFunc(pos: number) {
        return this.func(pos);
    }

    calculate() {
        throw new Error("Abstract method");
    }

    getDerivative() {
        return this.derivative;
    }
}

class RightDerivative extends BaseDerivative {
    constructor(x: number, h: number, func: (x: number) => any) {
        super(x, h, func);
    }

    calculate() {
        this.derivative = (this.calculateFunc(this.x + this.h) - this.calculateFunc(this.x)) / this.h;
    }
}

class LeftDerivative extends BaseDerivative {
    constructor(x: number, h: number, func: (x: number) => any) {
        super(x, h, func);
    }

    calculate() {
        this.derivative = (this.calculateFunc(this.x) - this.calculateFunc(this.x - this.h)) / this.h;
    }
}

class CenterDerivative extends BaseDerivative {
    constructor(x: number, h: number, func: (x: number) => any) {
        super(x, h, func);
    }

    calculate() {
        this.derivative = (this.calculateFunc(this.x + this.h) - this.calculateFunc(this.x - this.h)) / (2 * this.h);
    }
}

const myFunc1 = (x: number) => x * x + 1;

const derivativeList1 = [
    new LeftDerivative(1, 0.01, myFunc1),
    new RightDerivative(1, 0.01, myFunc1),
    new CenterDerivative(1, 0.01, myFunc1),
];

derivativeList1.forEach((derivative) => {
    derivative.calculate();
    console.log(derivative.constructor.name, derivative.getDerivative());
});

console.log("--------------------------------")

const myFunc2 = (x: number) => x * x * x + 3 * x;

const derivativeList2 = [
    new LeftDerivative(1, 0.01, myFunc2),
    new RightDerivative(1, 0.01, myFunc2),
    new CenterDerivative(1, 0.01, myFunc2),
];

derivativeList2.forEach((derivative) => {
    derivative.calculate();
    console.log(derivative.constructor.name, derivative.getDerivative());
});