var servidor = require('http');
var archivos = require('fs'); // fs=File System
servidor.createServer(function(req,res){
    archivos.readFile('inicio.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data)
        res.end("")
    });
    
    
}).listen(5502)