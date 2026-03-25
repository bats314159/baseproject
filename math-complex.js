// Complex number mathematics functions

class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other) {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }

    subtract(other) {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }

    multiply(other) {
        return new Complex(
            this.real * other.real - this.imaginary * other.imaginary,
            this.real * other.imaginary + this.imaginary * other.real
        );
    }

    divide(other) {
        const denominator = other.real * other.real + other.imaginary * other.imaginary;
        return new Complex(
            (this.real * other.real + this.imaginary * other.imaginary) / denominator,
            (this.imaginary * other.real - this.real * other.imaginary) / denominator
        );
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

// Example usage:
const c1 = new Complex(2, 3);
const c2 = new Complex(1, 4);

console.log('Addition:', c1.add(c2).toString());
console.log('Subtraction:', c1.subtract(c2).toString());
console.log('Multiplication:', c1.multiply(c2).toString());
console.log('Division:', c1.divide(c2).toString());