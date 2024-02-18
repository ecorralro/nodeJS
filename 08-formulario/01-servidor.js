var servidor = require('http');
var archivos = require('fs'); // fs=File System
var ruta = require('url');
var procesador = require('querystring');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    
    switch(req.url){
    case "/":
        archivos.readFile('inicio.html',function(err,data){
            res.write(data)
            res.end("")
        });
        break;
    case "/procesa":
        let datos = '';
        req.on('data',parte=>{
            datos += parte.toString();
        });
        req.on('end', ()=>{
            var cadena = datos;
            var procesado = procesador.parse(cadena);
            console.log(procesado);
        })
        break;
    
    default:
        res.end("Página no encontrada");
    }
    

}).listen(5502)