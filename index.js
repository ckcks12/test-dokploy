const http = require("http");

http
  .createServer((req, res) => {
    res.end(process.env.MESSAGE || "");
  })
  .listen(80);
