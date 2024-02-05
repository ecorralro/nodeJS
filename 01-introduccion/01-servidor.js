var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("Hola mundo desde NodeJS");
    console.log("Alguien ha cargado la web");
}).listen(5502);