const path = require("path");

function joinTwoPaths(path1, path2) {
  return console.log(path.join(path1, path2));
}

joinTwoPaths("folder1", "folder2/file.txt ");
