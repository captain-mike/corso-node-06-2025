const fs = require('fs/promises');


async function checkFile(){
 
    try{
        await fs.access('file-da-leggere.json');
        //mostra messaggio successo
    }catch{
        //gestisci errori
    }

}