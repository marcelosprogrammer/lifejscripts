var http = require('http');
var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Servidor Funcionando!\n');
});
server.listen(4000,'127.0.0.1');

