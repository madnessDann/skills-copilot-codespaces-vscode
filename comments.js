// Create web server

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url === '/'){
        fs.readFile('./comments.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === '/comments'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Comments');
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Page not found');
        res.end();
    }
}).listen(3000);