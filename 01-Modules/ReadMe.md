# 01 - Node.js Modules

## What is a Module?
In Node.js, **every file is a module**.
A module is a reusable piece of code that can be exported from one file
and imported into another.

---

## Why Modules?
- Clean code
- Reusability
- Separation of concerns
- Avoid global variables

---

## Key Concepts Used
- `module.exports` → to export data/functions
- `require()` → to import a module
- Each file has its own scope

---

## Files Explanation
- `math.js` → exports reusable math functions
- `hello.js` → imports and uses `math.js`

---

## Important Notes
- Node.js uses **CommonJS module system**
- A module is loaded **only once** and then cached
- `./` is mandatory for local modules

---

## Output
Addition: 15  
Subtraction: 5
