var http = require('http');

var PORT = 3000;

var server = http.createServer(function (req, res) {
    var path = req.url;

    if (path === '/') 
    {
        res.writeHead(200,"ok", { 'Content-Type': 'text/html' });
        res.end(`<h1>Welcome to the Home Page!</h1>`);
    }

    else if (path === '/about') 
    {
        res.writeHead(200,"ok", { 'Content-Type': 'text/html' });
        res.end(`<h1>This is a simple Node.js server.</h1>`);
    }

    else if (path === '/contact') 
    {
        res.writeHead(200,"ok", { 'Content-Type': 'text/html' });
        res.end(`<h1>Contact us at contact@example.com.</h1>`);
    }

    else 
    {

    res.writeHead(404, { 'Content-Type': 'text/plain'});
    res.end('404 Page Not Found');
    }

});

server.listen(PORT,function () {
    console.log("server listening on http://localhost:" + PORT)
});
