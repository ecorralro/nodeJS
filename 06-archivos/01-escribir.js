var archivos = require('fs');
archivos.appendFile("nuevo.txt",'Este es el contenido de mi nuevo archivo\n',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})