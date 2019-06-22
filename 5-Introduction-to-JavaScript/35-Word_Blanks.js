// Summary: This section gave me an understanding of using variables as word blanks to input words that can be interchangable value throughout a sentence.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

   result = "There was a " + myNoun + " " + "that was " + myAdjective + " " + myVerb + " " + myAdverb + ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
