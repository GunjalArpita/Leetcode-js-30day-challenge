// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.




var createCounter = function(init) {
    let value=init; 
     return {
       increment : function()
       {
          return value=value+1;
       },
       decrement : function()
       {
           return value=value-1
            
       },
       reset : function()
       {   
           value=init;
           return value;
       }
     }  
   };
    
   const counter=createCounter(5)
   console.log(counter.increment())
   console.log(counter.decrement());
   console.log(counter.reset());
   
   /**
    * const counter = createCounter(5)
    * counter.increment(); // 6
    * counter.reset(); // 5
    * counter.decrement(); // 4
    */