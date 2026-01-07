// sync.js
// Blocking / Synchronous file handling

const fs = require("fs");

console.log("Start");

// Blocks the main thread until file is read
const data = fs.readFileSync("notes.txt", "utf-8");
console.log(data);

console.log("End");
