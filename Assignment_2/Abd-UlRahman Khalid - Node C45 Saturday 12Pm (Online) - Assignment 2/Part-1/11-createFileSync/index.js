const fs = require("node:fs");
const fsPromis = require("node:fs/promises");

function createFile(filePath) {
  fs.writeFile("hello.text", "Hello World", (err) => {
    if (err) throw err;
    console.log("Success");
  });
}

createFile("./text.txt");
