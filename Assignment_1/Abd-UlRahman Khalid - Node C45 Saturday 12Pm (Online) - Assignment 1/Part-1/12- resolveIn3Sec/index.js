/*
12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
• Output Example: “Success”

*/

function resolveAfterThreeSec() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

resolveAfterThreeSec().then((value) => {
  console.log(value);
});
