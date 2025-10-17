var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to ABC College!');
    } 
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About ABC College</h1>');
    } 
    else {
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
    }
});

server.listen(8080,function () {
    console.log("server listening on http://localhost:8080")
});
