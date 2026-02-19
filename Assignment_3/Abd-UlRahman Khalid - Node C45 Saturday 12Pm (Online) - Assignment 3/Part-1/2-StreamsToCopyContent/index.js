const fs = require("fs");

const sourcePath = "./big.txt";
const destPath = "./dest.txt";

const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(destPath);

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied using streams.");
});
