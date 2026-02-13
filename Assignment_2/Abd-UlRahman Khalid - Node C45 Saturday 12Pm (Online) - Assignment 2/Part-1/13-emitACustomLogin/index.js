const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("login", (userName) => {
  console.log(`User logged in: ${userName}`);
});

myEmitter.emit("login", "Ahmed");
