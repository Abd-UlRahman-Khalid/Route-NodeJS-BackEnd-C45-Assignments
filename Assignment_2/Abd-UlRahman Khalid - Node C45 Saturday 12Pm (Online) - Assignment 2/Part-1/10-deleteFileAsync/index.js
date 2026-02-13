const fs = require("node:fs");

function removeFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error Happend", err);
      return;
    }
    console.log("Successfully removed the file");
  });
}

removeFile("./text.txt");
