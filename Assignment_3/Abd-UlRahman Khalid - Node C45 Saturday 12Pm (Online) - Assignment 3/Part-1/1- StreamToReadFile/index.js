const fs = require("fs");

const filePath = "./big.txt";

const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

readStream.on("data", (chunck) => {
  console.log("________________________");
  console.log(chunck);
  console.log("________________________");
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});
