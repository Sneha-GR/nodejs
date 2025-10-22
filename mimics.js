var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');

// Create an event emitter
var eventEmitter = new events.EventEmitter();

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname; // example: ./about.html

  // If user visits "/", load about.html by default
  if (q.pathname === "/") {
    filename = "./about.html";
  }

  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("<h1>404 Page Not Found</h1>");
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();

    // Emit custom events based on the page
    if (q.pathname === "/about.html" || q.pathname === "/") {
      eventEmitter.emit('pageLoaded', 'About Page');
    } else if (q.pathname === "/contact.html") {
      eventEmitter.emit('pageLoaded', 'Contact Page');
    } else {
      eventEmitter.emit('pageLoaded', filename);
    }
  });

  // Define event listener
  eventEmitter.on('pageLoaded', function (pageName) {
    console.log('Page loaded successfully:', pageName);
  });

}).listen(8080);

console.log('Server running at http://localhost:8080/');
