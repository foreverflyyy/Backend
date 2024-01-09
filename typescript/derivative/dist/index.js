"use strict";
class BaseDerivative {
    constructor(x, h, func) {
        this.x = x;
        this.h = h;
        this.func = func;
        this.derivative = 0;
    }
    calculateFunc(pos) {
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
    constructor(x, h, func) {
        super(x, h, func);
    }
    calculate() {
        this.derivative = (this.calculateFunc(this.x + this.h) - this.calculateFunc(this.x)) / this.h;
    }
}
class LeftDerivative extends BaseDerivative {
    constructor(x, h, func) {
        super(x, h, func);
    }
    calculate() {
        this.derivative = (this.calculateFunc(this.x) - this.calculateFunc(this.x - this.h)) / this.h;
    }
}
class CenterDerivative extends BaseDerivative {
    constructor(x, h, func) {
        super(x, h, func);
    }
    calculate() {
        this.derivative = (this.calculateFunc(this.x + this.h) - this.calculateFunc(this.x - this.h)) / (2 * this.h);
    }
}
const myFunc1 = (x) => x * x + 1;
const derivativeList1 = [
    new LeftDerivative(1, 0.01, myFunc1),
    new RightDerivative(1, 0.01, myFunc1),
    new CenterDerivative(1, 0.01, myFunc1),
];
console.log(derivativeList1);
derivativeList1.forEach((derivative) => {
    derivative.calculate();
    console.log(derivative.constructor.name, derivative.getDerivative());
});
const myFunc2 = (x) => x * x * x + 3 * x;
const derivativeList2 = [
    new LeftDerivative(1, 0.01, myFunc2),
    new RightDerivative(1, 0.01, myFunc2),
    new CenterDerivative(1, 0.01, myFunc2),
];
derivativeList2.forEach((derivative) => {
    derivative.calculate();
    console.log(derivative.constructor.name, derivative.getDerivative());
});
