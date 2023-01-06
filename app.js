const express = require("express");
const app = express();

app.use(({ next }) => {
    console.log("In middleware 1");
    next();
});

app.use(({ next }) => {
    console.log("In middleware 2");
    next();
});

app.get("/users", ({ res }) => {
    console.log("In /users middleware");
    res.send(`
<ul>
<li>User 1</li>
<li>User 2</li>
<li>User 3</li>
</ul>
`);
});

app.get("/", ({ res }) => {
    console.log("In / middleware");
    res.send("Home sweet Home");
});

app.listen(3000);
