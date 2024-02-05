var servidor = require('http');

servidor.createServer(function(req,res){
    fecha = new Date()
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hola mundo desde NodeJS");
    res.end(""+fecha.getFullYear()+"")
    console.log("Alguien ha cargado la web");
}).listen(5502);