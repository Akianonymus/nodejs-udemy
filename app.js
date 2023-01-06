const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [];

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", ({ res }) => {
  res.render("index", { title: "Add User" });
});

app.get("/users", ({ res }) => {
  res.render("users", {
    title: "User",
    users: users,
    hasUsers: users.length > 0,
  });
});

app.post("/add-user", (req, res, _) => {
  users.push({ name: req.body.user });
  res.redirect("/users");
});

app.listen(3000);
