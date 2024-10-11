import VerAdvac from "./VeryveryAdvCalc.js"; 
import Main from "./Calculator.js";
import AdvCalculator from "./advCal.js"; 

class SolveX extends VerAdvac {
    solveQuadratic() {
        const a = parseFloat(document.getElementById("a").value);
        const b = parseFloat(document.getElementById("b").value);
        const c = parseFloat(document.getElementById("c").value);
        const resultDiv = document.getElementById("quadResult");

        // Ensure 'a' is not zero
        if (a === 0) {
            resultDiv.innerText = "Coefficient 'a' must be non-zero.";
            return;
        }

        // Check if any field is empty
        if (a === '' || b === '' || c === '') {
            resultDiv.className = "error";
            resultDiv.innerText = "All fields must be filled.";
            return;
        }

        // Check if inputs are not numbers
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDiv.className = "error";
            resultDiv.innerText = "All fields must be filled with numbers.";
            return;
        }

        resultDiv.className = "result";
        resultDiv.innerText = `The values provided are: a = ${a}, b = ${b}, c = ${c}`;

        const D = b ** 2 - 4 * a * c;
        let roots;

        if (D > 0) {
            const root1 = (-b + Math.sqrt(D)) / (2 * a);
            const root2 = (-b - Math.sqrt(D)) / (2 * a);
            roots = `The roots are: ${root1} and ${root2}`;
        } else if (D === 0) {
            const root = -b / (2 * a);
            roots = `The root is: ${root}`;
        } else {
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-D) / (2 * a);
            roots = `The roots are complex: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
        }

        resultDiv.innerText = roots;
    }

    refreshPage() {
        location.reload();
    }

    // New method to clear inputs and result
    deleteInputs() {
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
        document.getElementById("a").value = '';
        document.getElementById("b").value = '';
        document.getElementById("c").value = '';
        document.getElementById("quadResult").innerText = '';
        document.getElementById("calcResult").innerHTML = '';

    }
}

// Create an instance of SolveX and expose methods
const solver = new SolveX();
window.solveQuadratic = () => solver.solveQuadratic();


document.getElementById('delite').addEventListener('click', () => {
    solver.deleteInputs();
});

// LET'S TEST IT
const resultPower = solver.Power(2, 4);
const addResult = solver.add(3, 4);
const addResultPower = solver.Power(3, 5);

console.log("Power result: ", resultPower);
console.log("Add result: ", addResult);
console.log(addResultPower);
