// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 
// Example 1:
// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]   Output: [{"calls":1,"value":6}]
// Explanation:const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called


var once = function(fn) {
    let flag=false;
    return function(...args){
      if(!flag)
      {
        flag=true;
        return fn(...args);
      }  
      return undefined;
    }
};
let fn=(a,b,c)=>(a+b+c)
let oncefn=once(fn)
console.log(oncefn(1,2,3));
console.log(oncefn(1,2,3));

