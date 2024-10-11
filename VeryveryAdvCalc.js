import AdvCalculator from "./advCal.js"; 

export default class VerAdvac extends AdvCalculator {
    add(num1, num2){
        return num1 + num2;
    }
    minus(num1, num2) {
        return num1 - num2;
    }
    multiply(num1, num2) {
        return num1 * num2;
    }
    divide(num1, num2) {
        if (num2 === 0) {
            return "Cannot divide by zero!";
        }
        return num1 / num2;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

// Create an instance of VerAdvac
const vvad = new VerAdvac();

window.performOperation = function (operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;

    switch (operation) {
        case 'add': 
            result = vvad.add(num1, num2)
            break;
        case 'minus':
            result = vvad.minus(num1, num2);
            break;
        case 'multiply':
            result = vvad.multiply(num1, num2);
            break;
        case 'divide':
            result = vvad.divide(num1, num2);
            break;
        case 'power':
            result = vvad.power(num1, num2);
            break;
        default:
            result = "Invalid operation!";
    }

    document.getElementById("calcResult").innerText = "Result: " + result;
};
