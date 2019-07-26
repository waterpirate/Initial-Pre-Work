// Summary: This section gave me an understanding of replacing an equality operator with the strict equality operator in order to compare both values without converting the value types.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
