// var http = require('http');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end(./index.html);
// });
// server.listen(8080);

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./drawp5')).listen(8080);