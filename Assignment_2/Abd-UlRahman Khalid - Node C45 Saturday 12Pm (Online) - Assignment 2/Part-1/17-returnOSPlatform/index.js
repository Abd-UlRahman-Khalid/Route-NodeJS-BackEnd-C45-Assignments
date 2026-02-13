const os = require("node:os");

function getPlatformArch() {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
}

console.log(getPlatformArch());
