/**
 *
 * What is the difference between forEach and for...of? When would you use each? (0.5 Grade) *
 * */

/**
 *
 * forEach
 *
 * is a method of Array take a function as an argument , it used to iterate over array of objects in ordered manner
 *
 *
 * For...of
 *
 * is statment executes a loop operates on a sequance of values
 *
 * the difference between them that For .. of loop and forEach that for..of loop don't need a call back function
 */

let arr = ["Ali", "Ahmed", "Alaa", "Halem"];

//forEach

arr.forEach((value) => {
  console.log(value);
});

console.log("--------------------------------------------");

//for...of

for (let value of arr) {
  console.log(value);
}
