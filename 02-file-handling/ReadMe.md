# 02 - File Handling in Node.js

## What is File Handling?
File handling means working with files:
- Read
- Write
- Update
- Delete

Node.js provides the **fs (File System)** module.

---

## Types of File Operations

### 1. Synchronous (Blocking)
- Uses `readFileSync`
- Blocks the main thread
- Execution waits until task completes

Example:
Start → Read File → End

---

### 2. Asynchronous (Non-Blocking)
- Uses `readFile`
- Does NOT block main thread
- Uses callback + event loop

Example:
Start → End → File Content

---

## Files Explanation
- `sync.js` → demonstrates blocking behavior
- `async.js` → demonstrates non-blocking behavior
- `notes.txt` → sample file to read

---

## Key Takeaways
- Node.js is single-threaded
- Blocking operations slow down servers
- Non-blocking I/O is preferred in real apps
- Async does NOT mean parallel JS execution

---

## Golden Rule
**I/O should be async, CPU-heavy work should be avoided**
