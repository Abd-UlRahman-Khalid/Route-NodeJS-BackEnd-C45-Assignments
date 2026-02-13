const fs = require("node:fs");

fs.writeFile("./async.txt", "Async save", "utf8", (err) => {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  console.log("Successfully Added the content");
});
