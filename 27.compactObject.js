// Given an object or array obj, return a compact object.
// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies
// to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when 
// Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
// Example 1:
// Input: obj = [null, 0, false, 1]  ,Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:
// Input: obj = {"a": null, "b": [false, 1]} , Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

var compactObject = function(obj) {
    function dfs(obj)
    {
     if(!obj)
     return false;
     if(typeof obj !=='object')
     return obj;
     if(Array.isArray(obj))
     {
         const newArr=[];
         for(let i=0;i<obj.length;i++)
         {
             const current=obj[i];
             const subRes=dfs(current);
             if(subRes)
             {
                 newArr.push(subRes);
             }
         }
         return newArr;
     }
     const newObj={};
     for(const key in obj)
     {
         const subRes=dfs(obj[key])
         if(subRes)
         {
             newObj[key]=subRes;
         }
     }
     return newObj;
    } 
    return dfs(obj);
 };

 console.log(compactObject([null,0,false,1]));
 console.log(compactObject({"a": null, "b": [false, 1]}));
 console.log(compactObject({"a": null, "b": [false, 1, {"c": null, "d": [false, 2]}]}));
 
  