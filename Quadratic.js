import VerAdvac from "./VeryveryAdvCalc.js"; // Ensure correct path
import Main from "./Calculator.js"; // Ensure correct path
import AdvCalculator from "./advCal.js"; // Ensure correct path

// Quadratic Solver class that extends the advanced calculator
class SolveX extends VerAdvac {
    solveQuadratic() {
        const a = parseFloat(document.getElementById("a").value);
        const b = parseFloat(document.getElementById("b").value);
        const c = parseFloat(document.getElementById("c").value);
        const resultDiv = document.getElementById("quadResult"); // Result display for quadratic

        // Ensure a is not zero
        if (a === 0) {
            resultDiv.innerText = "Coefficient 'a' must be non-zero.";
            return;
        }

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDiv.className = "error"
            resultDiv.innerText = "All fields must be filled with numbers.";
        
            return;  
        }

        // Calculate the discriminant
        const D = b ** 2 - 4 * a * c;

        let roots;
        if (D > 0) {
            // Two distinct real roots
            const root1 = (-b + Math.sqrt(D)) / (2 * a);
            const root2 = (-b - Math.sqrt(D)) / (2 * a);
            roots = `The roots are: ${root1} and ${root2}`;
        } else if (D === 0) {
            // One real root (repeated)
            const root = -b / (2 * a);
            roots = `The root is: ${root}`;
        } else {
            // No real roots (complex roots)
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-D) / (2 * a);
            roots = `The roots are complex: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
        }

        resultDiv.innerText = roots; // Display the result
    }
}

// Create an instance of SolveX and expose the solveQuadratic method
const solver = new SolveX();
window.solveQuadratic = () => solver.solveQuadratic();

// eg usage of the advanced calculator
const resultPower = solver.Power(2, 4);
const addResult = solver.add(3, 4);
const addResultPower = solver.Power(3,5);

console.log("Power result: ", resultPower); 
console.log("Add result: ", addResult);
console.log(addResultPower);
