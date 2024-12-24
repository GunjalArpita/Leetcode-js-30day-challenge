// Write a function argumentsLength that returns the count of arguments passed to it.
//  Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

var argumentsLength = function(...args) {
    return args.length;  
    };
    console.log(argumentsLength(5));
    console.log(argumentsLength({},null,"3"));