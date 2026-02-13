const path = require("path");

function isAbsolute(pathString) {
  return path.isAbsolute(pathString);
}

console.log(isAbsolute("/home/user/file.txt "));
