// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.
// Your Calculator class should have the following methods:
// add - This method adds the given number value to the result and returns the updated Calculator.
// subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// power - This method raises the result to the power of the given number value and returns the updated Calculator.
// getResult - This method returns the result.
// Solutions within 10-5 of the actual result are considered correct.
// Example 1:
// Input:  actions = ["Calculator", "add", "subtract", "getResult"],  values = [10, 5, 7] ,Output: 8
// Explanation: new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
// Example 2:
// Input: actions = ["Calculator", "multiply", "power", "getResult"],  values = [2, 5, 2] ,Output: 100
// Explanation: new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
// Example 3:
// Input: actions = ["Calculator", "divide", "getResult"], values = [20, 0] ,Output: "Division by zero is not allowed"
// Explanation: new Calculator(20).divide(0).getResult() // 20 / 0 
// The error should be thrown because we cannot divide by zero.

class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value=value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
      this.value=this.value+value;
      return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
         this.value=this.value-value;
         return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value=this.value*value; 
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value===0)
        {
           // throw new Error("Division by zero is not allowed");
              return "Division by zero is not allowed";
        }
         //this.value=this.value/value;
            this.value=Math.floor(this.value/value);
         return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
         this.value=Math.pow(this.value,value);
         return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}
let obj=new Calculator(10);
console.log(obj.add(5).subtract(7).getResult()); // 10 + 5 - 7 = 8
let obj1=new Calculator(2);
console.log(obj1.multiply(5).power(2).getResult()); // (2 * 5) ^ 2 = 100
let obj2=new Calculator(20);
//console.log(obj2.divide(0).getResult()); // 20 / 0
console.log(obj2.divide(0)); // 20 / 0

