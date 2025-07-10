//Restiamo in attesa delle modifiche ad un file ed eseguiamo una funzione ogni volta che questo viene modificato
const fs = require('fs');

const filePath = 'file.txt';
const watcher = fs.watch(filePath);

watcher.on('change',() => {
    
    fs.readFile(filePath,'utf8', (err, data) => {
        if(err) return console.log('Errore:',err.message);
        
        console.log(data);        
    })

})

console.log(`In ascolto su ${filePath}`);
