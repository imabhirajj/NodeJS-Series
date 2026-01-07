// math.js
// This file is a LOCAL MODULE
// It exports reusable logic

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// Exporting multiple functions
module.exports = {
  add,
  sub
};



