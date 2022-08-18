var static = require('node-static');
var http = require('http');

var file = new(static.Server)(__dirname);
const port = 8081;

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);

console.log(`Final Project server running on port ${port}`)