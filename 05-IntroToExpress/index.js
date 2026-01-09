const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home-Page");
});

app.get("/about", (req, res) => {
  res.send("I am Abhiraj");
});

app.post('/',(req,res) => {
  res.send("Post Request on Home Page");
})

app.delete('/about',(req,res) => {
  res.send("Delete Request on About Page");
})

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});