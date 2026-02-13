/**
14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
• Input Example: name: "John", age: 30}
• Output Example: ["name", "age"]

 */

let obj = { name: "Ali", age: 22 };

function convertObjectIntoKeyArray(object) {
  console.log(Object.keys(object));
}

convertObjectIntoKeyArray(obj);
