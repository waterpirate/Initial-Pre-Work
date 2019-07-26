// Summary: This section gave me an understanding of using the "( === )" Strict Equality method in order to compare the data type and a value within the desired element. 

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
