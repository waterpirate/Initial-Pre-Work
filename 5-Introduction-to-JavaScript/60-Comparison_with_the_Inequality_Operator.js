// Summary: This section gave me an understanding of using the " != " inequality operator tied with an if statement to create a "not equal" return function when the inequality operator values are not matched.

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(99);
