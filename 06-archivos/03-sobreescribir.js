var archivos = require('fs');
archivos.writeFile("nuevo.txt",'Este es mi nuevo contenido 2.0\n',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})