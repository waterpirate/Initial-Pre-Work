// Summary: This section gave me an understanding of how vairables can only be decalared within thier function. Running the variable outside of its function will result in an undefined output.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;

  console.log();
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
