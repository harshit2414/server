 const http = require("http");

 const myServer = http.createServer((req ,res) => {
    console.log(req.headers);
    res.end("Hello from server");
 });


 myServer.listen(8002, () => console.log("Server Started!") );