/**
 * 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
• Input: "The quick brown fox"
• Output: ["The", "quick", "brown", "fox"]

 */

let testStg = "The quick brown fox";

function splitStg(stg) {
  let arrStg = stg.split(" ");
  console.log(arrStg);
}

splitStg(testStg);
