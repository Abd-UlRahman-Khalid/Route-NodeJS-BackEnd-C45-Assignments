const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("start", () => {
  console.log(" Welcome event triggered! ");
});

myEmitter.emit("start");
