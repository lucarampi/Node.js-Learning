const http = require("http");// imports http module
const port = 8000 //define the port we will use
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end("Hello Node.js!");
}).listen(port);

console.log(`Server is running! (port ${port})`)