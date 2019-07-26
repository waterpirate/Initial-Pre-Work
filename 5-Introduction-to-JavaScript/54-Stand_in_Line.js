// Summary: This section gave me an understanding of creating a function that includes an "array" as well as a "number" for it's arguments. This function also needed to have it's "number argument" added to the end on an array which was achieved by using the "push" function. We also used the return function to return our variable to the front of the array.

function nextInLine(arr, item) {
  // Your code here

  arr.push(item);

  var variablenameexample = arr.shift();

  return variablenameexample; // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
