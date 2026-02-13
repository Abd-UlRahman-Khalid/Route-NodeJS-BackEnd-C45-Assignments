const fs = require("node:fs");

try {
  console.log(fs.readFileSync("./notes.txt", "utf8"));
} catch (err) {
  console.error("Error reading the file:", err);
}
