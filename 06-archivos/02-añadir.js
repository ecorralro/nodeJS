var archivos = require('fs');
archivos.appendFile("nuevo.txt",'Este es otro contenido de mi archivo\n',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})