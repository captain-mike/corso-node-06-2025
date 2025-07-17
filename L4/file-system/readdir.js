const fs = require('fs');

//fs.exists(); è deprecato

//Testa la possibilità di accesso alla directory. 
//fs.access() È il metodo consigliato per verificare l'esistenza di un file directory 
//Accetta come primo argomento un percorso e come secondo argomento, una call back Utilizzata per gestire errori 
fs.access('files', (err) => {
//Se la cartella esiste e si ha accesso ad essa "err" contiene null
    if(err){
        console.log('Cartella inesistente');
    }else{
        console.log('Cartella esistente');
    }
});


fs.stat('files', (err, stats) => {

    if(err){
        console.log('Cartella inesistente');
    }else{
        // console.log('Cartella esistente:', stats);
    }
});

//Permette di scansionare una cartella e ottenere informazioni sui file. 
fs.readdir('.','utf8', (err, files) => {

    if(err){
        console.log('Errore nella lettura della cartella', err);
        return;        
    }

    console.log(files);
    for(const file of files){
        if(file === 'file-da-leggere.json'){
            fs.readFile(file,'utf8',(err, data) => {

                try{

                    console.log(`Contenuto file ${file}`,data);
                    
                }catch(parseError){
                    console.log(parseError);
                    
                }

            })
        }
    }

})