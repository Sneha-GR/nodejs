var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});

if (q.pathname == "/home.html") {

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log('This is the home page');
}
eventEmitter.on('home', myEventHandler);
eventEmitter.emit('home');
}
else if (q.pathname == "/service.html") {
    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    var myEventHandler = function () {
        console.log('This is the service page');
    }
    eventEmitter.on('service', myEventHandler);
    eventEmitter.emit('service');
}
}).listen(8080);

