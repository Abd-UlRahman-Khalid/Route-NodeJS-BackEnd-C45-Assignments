const path = require("path");

function fileExtention() {
  return path.extname(__filename);
}

console.log(fileExtention());
