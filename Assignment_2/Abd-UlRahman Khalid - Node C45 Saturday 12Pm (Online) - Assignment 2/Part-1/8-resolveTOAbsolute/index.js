const path = require("path");

function resoveToAbsolute(resolvePath) {
  return console.log(path.resolve(resolvePath));
}

resoveToAbsolute("./index.js");
