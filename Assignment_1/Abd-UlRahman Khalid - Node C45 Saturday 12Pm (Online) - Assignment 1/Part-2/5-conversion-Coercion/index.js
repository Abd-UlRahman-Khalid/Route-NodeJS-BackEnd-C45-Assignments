/**
 * 
 * the difference betweern the Conversion and coarcion 
 * 
 * the conversion
 * is changing the data type in JS Manually from data type to another
 
EX
*/
console.log("------------------------------------------");
console.log("--------------CONVERSION--------------------");
console.log(String(123)); /// the Resuslt will be "123"
console.log(Number("456")); /// the Result will be 456
console.log(Number("Hello")); // NaN cange the Hello into number already but will not change the fact that Hello is not a number so will send for you Nan - Not a Number -

console.log(Boolean(0)); /// False
/**while the COARCION
 * 
 * is changing the data type automatic 

EX
*/
console.log("------------------------------------------");
console.log("--------------COARCION--------------------");
console.log("5" + 5); // + Concatenation will happen string  "55"
console.log("5" - 2); // 3
console.log("4" / 2); // 2
console.log("5" * 2); // all these exaple will result a number 10
console.log(true + 1); // true is 1 so 1+1 = 2
console.log(false + 1); // false is 0 so 0 + 1 = 1
console.log(false + "1");
// hmm this is concatenation so" false1"
