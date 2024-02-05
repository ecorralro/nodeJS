var archivos = require('fs');
archivos.unlink('nuevo2.txt',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})