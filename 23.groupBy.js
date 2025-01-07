// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return 
// a grouped version of the array.A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing
// all items in the original array which generate that key.The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.
// Example 1:
// Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }
// Explanation:
// Output is from array.groupBy(fn).The selector function gets the "id" out of each item in the array.There are two objects with an "id" of 1.
//  Both of those objects are put in the first array.There is one object with an "id" of 2. That object is put in the second array.


//here it shows an error but in leetcode works properly.
Array.prototype.groupBy = function(fn) {
    return this.group(fn);
};


  [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}