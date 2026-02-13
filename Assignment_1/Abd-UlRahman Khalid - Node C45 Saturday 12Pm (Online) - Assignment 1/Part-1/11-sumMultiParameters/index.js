/* 

11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
• Input Example: 1, 2, 3, 4, 5
• Output Example: 15

*/

function sumParameters(...parameters) {
  let sum = 0;

  for (let num of parameters) {
    sum += num;
  }

  return sum;
}

console.log(sumParameters(5, 6, 8, 3));
