const fs = require('fs');

const pizza = {
    gusto: "Diavola",
    prezzo: 1
}

//Se si prova a scrivere il file in una cartella che non esiste, riceviamo errore 
fs.writeFile(
    'files-creati/pizze.json',
    JSON.stringify(pizza),
    {encoding:'utf8'},
    (err) => {
        if(err){
            console.log(err);   
        }else{
            console.log('File pizze.json creato correttamente');   
        }
    }
)

//metodo per la scrittura di files sincrono
fs.writeFileSync(
    'files-creati/pizze-sync.json',
    JSON.stringify(pizza),
    {
        encoding:'utf8'
    }
)

console.log('File creato correttamente');
