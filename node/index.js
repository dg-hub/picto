var express = require("express");
var app = express();
const port = process.env.PORT || 1337;
const http = require('http');

/*const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});
*/
//server.listen(port);
app.get('/', (req, res) => res.send('Hello Express!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
