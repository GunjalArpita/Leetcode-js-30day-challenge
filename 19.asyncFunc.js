var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let result=[];
        let resolvecount=0;
        let hasrejected=false;
        const checkcompletion=()=>{
            if(resolvecount==functions.length)
            {
                resolve(result.map(r=>r.value));
            }
        }
        const start=Date.now();
        functions.forEach((fn,index)=>{
            fn().then(value=>{
                if(!hasrejected){
                    result[index]={t:Date.now()-start,value};
                    resolvecount++;
                    checkcompletion();
                }
            })
            .catch(reason=>{
                if(!hasrejected){
                    hasrejected=true;
                    reject(reason);
                }
            });
        });
            });
};


  const promise = promiseAll([() => new Promise(res => res(42))])
  promise.then(console.log); // [42]


// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts 
// no arguments and returns a promise. All the promises should be executed in parallel.
// promise resolves:
// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of
//  all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:
// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.
// Example 1:
// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]
// The single function was resolved at 200ms with a value of 5.
 