var archivos = require('fs');
archivos.rename("nuevo.txt",'nuevo2.txt',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})