// Summary: This section gave me an understanding of creating a function that displays a certain statement when a specific option is selected. In this case, we used "if" statements to create multiple parameters within our function.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
