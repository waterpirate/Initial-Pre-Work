// Summary: This section gave me an understanding of the .unshift() command and how it is used to add dn element to the beginning of an array.

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

myArray.unshift(["Paul",35]);
