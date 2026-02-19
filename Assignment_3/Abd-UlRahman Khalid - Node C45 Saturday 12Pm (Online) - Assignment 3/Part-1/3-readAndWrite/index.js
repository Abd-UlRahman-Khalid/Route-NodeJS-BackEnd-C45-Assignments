const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

const inputPath = "./big.txt";
const outputPath = "./data.txt.gz";

// Create streams
const readStream = fs.createReadStream(inputPath);
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream(outputPath);

// Create pipeline
pipeline(readStream, gzip, writeStream, (err) => {
  if (err) {
    console.error("Pipeline failed:", err);
  } else {
    console.log("File successfully compressed.");
  }
});
