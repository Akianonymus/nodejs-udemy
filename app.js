const http = require("http");
const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    switch (url) {
        case "/":
            res.write(`<html>
<head><title>Homepage</title></head>
<body>
    <form action="/create-user" method="POST">
        <input type="text" name="username">
          <button type="submit">Send</button>
        </input>
    </form>
</body>
</html>`);
            res.end();
            break;
        case "/users":
            res.write(`<html>
<head><title>Users</title></head>
<body>
    <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
    </ul>
</body>
</html>`);
            res.end();
            break;
        case "/create-user":
            if (method === "POST") {
                const data = [];
                req.on("data", (chunk) => {
                    data.push(chunk);
                });
                req.on("end", () => {
                    const parsedData = Buffer.concat(data).toString();
                    console.log(parsedData.split("=")[1]);
                });
                res.statusCode = 302;
                res.setHeader("Location", "/");
                res.end();
            }
            break;
        default:
            res.write(`<html>
<head><title>Error</title></head>
<body>
    Error: Invalid Page
</body>
</html>`);
            res.end();
            break;
    }
};

const server = http.createServer(requestHandler);

server.listen(3000);
