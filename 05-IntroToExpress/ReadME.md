
## 📌 What is Express.js?

**Express.js** is a **minimal and flexible web framework** built on top of **Node.js**.

- It helps in building **web servers and APIs**
- It simplifies routing, request handling, and middleware
- It is the most widely used backend framework with Node.js

👉 Express does **not replace Node.js**  
👉 Express **runs on Node.js**

---

## ❓ Why do we use Express.js?

Using only Node.js (`http` module) becomes complex as the app grows.

Express solves these problems:

### ✅ Clean Routing
```js
app.get("/about", (req, res) => {
  res.send("About Page");
});


"express": "^5.2.1" // this is the version of Express.

1st part - 5
2nd part - 2
3rd part - 1

// 3rd part - Minor Fixes(Optional) 
Ex-5.2.2 , 5.2.3 etc

// 2nd part - Recommended Bug fix(Security fix)
Ex-5.3.1

// 1st part - Major release - Major Update
Ex-6.2.1

// ^ caret symbol - This means install all the minor and recommonded bug fix but dont update major release 
