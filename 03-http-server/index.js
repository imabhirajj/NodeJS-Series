const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} : New Req Received\n`;
  fs.appendFile('log.txt', log, (err,data) => {
   switch(req.url){
      case '/':
        res.end("Home Page");
        break;
      case '/about':
        res.end("I am Abhiraj");
        break;  
      default:
        res.end("404 Page Not Found");
        break;
   }
  });
  console.log(req.headers);
   console.log("New Req Received");
   res.end("Hello from the server");
});


myserver.listen(8000,() => console.log("Server is listening on port 8000")); 