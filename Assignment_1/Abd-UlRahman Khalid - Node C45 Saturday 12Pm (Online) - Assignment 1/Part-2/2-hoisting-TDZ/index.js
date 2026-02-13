/**
 *
 * Hoisting
 *
 * The defult behavior of a variable and function decleration are moving to the top of their scope during the compilation phase , before code execution
 *
 *
 * Temporal Dead Zone (TDZ)
 *
 * refer to the period between the entering of a scope and the actual initialization of a variable declared with let and const so give me error in case of any attempt to access these variables before their declaration
 *
 * but var initialized as undefined because it don't enter the TDZ and can be accessed before being declared
 *
 * */

console.log(x); // undefined

var x = 5;

console.log(y); //Error  - Cannot access 'y' before initialization

let y = 5;
