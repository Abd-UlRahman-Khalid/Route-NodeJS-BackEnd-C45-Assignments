/*

*13. Write a function to find the largest number in an array. (0.5 Grade)
• Input Example: [1, 3, 7, 2, 4]
• Output Example: 7

*/

let arr = [1, 20, 7, 33, 4];

function findTheLargestNum(array) {
  let bigNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (arr[i] > bigNum) {
      bigNum = array[i];
    }
  }
  console.log(bigNum);
}

findTheLargestNum(arr);
