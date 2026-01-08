const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log(parsedUrl);
  res.end("Server running");
});

server.listen(3000);
