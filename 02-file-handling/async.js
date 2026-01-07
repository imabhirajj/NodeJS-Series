// async.js
// Non-blocking / Asynchronous file handling

const fs = require("fs");

console.log("Start");

// Offloads file reading to background
fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log(data);
});

console.log("End");
