// Given an integer n, return a counter function. This counter function initially returns n and then returns 1
// more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]





/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    
    return function() {
      let c=0
      while(c<4)
      {
         return n++; 
         } 
    };
};
 let counter=createCounter(10);
 console.log(  counter());
 console.log(  counter());
 console.log(  counter());
//  counter();
//  counter();
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */