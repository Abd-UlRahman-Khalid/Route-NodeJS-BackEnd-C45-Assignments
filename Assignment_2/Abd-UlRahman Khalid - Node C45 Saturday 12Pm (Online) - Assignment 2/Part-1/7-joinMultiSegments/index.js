const path = require("path");

function joinPath(...stg) {
  return console.log(path.join(...stg));
}

joinPath("src", "components", "App.js");
