const http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var uc = require('upper-case');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dt.myDateTime() + '\n');
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(req.url + '\n');
    res.write(uc("Hello World!"));
    res.end(txt);
});

server.listen(port, hostname, () =>{
  console.log('Server started on port ' + port);
});
