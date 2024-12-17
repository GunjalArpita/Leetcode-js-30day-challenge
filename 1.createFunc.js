// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"




function createHelloWorld()
{
   return function()
{
   return "Hello World";
}
}
let a=createHelloWorld();
console.log(a());