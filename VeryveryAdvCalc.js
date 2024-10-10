import AdvCalculator from "./advCal.js";

class VerAdvac extends AdvCalculator {
    minus(num1, num2) { 
        return num1 - num2;
    }
    multiply(num1, num2) { 
        return num1 * num2;
    }
    divide(num1, num2) {
        return num1 / num2;
    }
    
    power(base, exponent) {
        return Math.pow(base, exponent); 
    }
}

const vvad = new VerAdvac(); // istance variable.
const minusResult = vvad.minus(10, 5);
const multiplyResult = vvad.multiply(5, 2);
const divideResult = vvad.divide(10, 2);
const powerM = vvad.power(minusResult, divideResult);

console.log("Minus result: ", minusResult); 
console.log("Multiply result: ", multiplyResult);
console.log("Divide result: ", divideResult); 
console.log("Power result: ", powerM); 
