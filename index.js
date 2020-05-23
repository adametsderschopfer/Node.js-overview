const http = require("http");
const path = require("path");
const fs = require("fs");

const Iurl = (req) => (url) => req.url === url;

const server = http.createServer((req, res) => {
  const url = Iurl(req);
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    if (url("/")) {
      fs.readFile(
        path.join(__dirname, "views", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (url("/about")) {
      fs.readFile(
        path.join(__dirname, "views", "about.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;

          res.end(content);
        }
      );
    } else if (url("/api/users")) {
      res.writeHead(200, {
        "Content-Type": "text/json",
      })

      const users = [
        {name: 'Abrakadabre', age: 0},
        {name: 'asd', age: 0},
        {name: 'Abrakadasdaasdasdbre', age: 0},
        {name: 'Abrakadasdabre', age: 0}
      ]

      res.end(JSON.stringify(users))
    }
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, {
      "Content-type": "text/html; charset=utf-8",
    });

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      const message = body.toString().split("=")[1];

      res.end(`
    <h1>Ваше сообщение: ${message}</h1>
  `);
    });
  }

  // console.log(req.url);

  // res.write("<h1>Hello from nodejs</h1>");
  // res.end(`
  //   <div>
  //     <pre>Hello world ebatsya v pasatizji</pre>
  //   </div>
  // `);
});

server.listen(3000, () => {
  console.log("Server has been started");
});
