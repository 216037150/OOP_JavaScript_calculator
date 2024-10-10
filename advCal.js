
import Main from './Calculator.js';  

export default class AdvCalculator extends Main { 
    Power(num1, num2) {
        return Math.pow(num1, num2);
    }
}

const cal = new AdvCalculator();
const result = cal.Power(1, 1); 
const add = cal.add(3, 4);


console.log("Power result: ", result); 
console.log("Add result: ", add);        
