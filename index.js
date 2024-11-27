const http = require("http");
const { getDateTime } = require("./time")

const port = 8080;

http.createServer((req, res) => {
    console.log(getDateTime());
    res.writeHead(200);
    res.write("adva apel");
    res.write(getDateTime());
    res.end();
}).listen(port);

console.log(`Listening on port ${port}`);