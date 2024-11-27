const http = require("http");
const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200);
    res.write("We built our first server");
    res.end();
}).listen(port);

console.log(`Listening on port ${port}`);