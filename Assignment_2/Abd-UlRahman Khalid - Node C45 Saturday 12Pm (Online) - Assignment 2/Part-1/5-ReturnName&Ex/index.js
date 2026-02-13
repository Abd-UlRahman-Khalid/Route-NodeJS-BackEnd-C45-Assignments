const path = require("path");

function nameAndExt(stg) {
  const pathObj = path.parse(stg);
  return {
    Name: pathObj.name,
    Ext: pathObj.ext,
  };
}
console.log(nameAndExt(" /home/app/main.js"));
