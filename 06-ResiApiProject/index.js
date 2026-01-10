const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const Port = 8000;

// GET all users (HTML)
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(u => `<li>${u.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// GET user by id (JSON)
app
  .route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);

  const user = users.find(u => Number(u.id) === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.json(user);
}).put((req, res) => {
  return res.json({
    status: "pending",
  });
})
  .delete((req, res) => {
    const id = Number(req.params.id);
    res.json({
      message: `User with id ${id} deleted`,
    });
  });

// Post Request
app.post("/api/users", (req, res) => {
  res.json({
    message: "Post Request Received",
  });
});




app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
