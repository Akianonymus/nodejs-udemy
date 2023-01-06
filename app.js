const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const home = require("./routes/home");
const users = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(home);
app.use(users);

app.use(({ res }) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
