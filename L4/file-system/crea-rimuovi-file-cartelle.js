const fs = require('fs');

class ManageFiles{

    static creaCartella(){
        //{recursive: true} Permette di creare cartelle annidate. 
        //Bere, se la cartella esiste già non viene creata e non riceviamo errore. 
        fs.mkdir('nuova-cartella/test', {recursive:true}, (err) => {
            if(err){
                console.log('Errore nella creazione della cartella',err);
                return;
            }
            
            console.log('Cartella creata');            

        });
    }

    static eliminaCartella(){
        //Esiste anche rmdir che elimina solo cartelle ma è in via di deprecazione
        //Utile anche per eliminare file 
        //{recursive: true} Permette di creare cartelle annidate. 
        fs.rm('nuova-cartella', {recursive:true}, (err) => {
            if(err){
                console.log('Errore nell\'eliminazione della cartella',err);
                return;
            }
            
            console.log('Cartella eliminata'); 
        })
    }

    static creaFile(){
        fs.writeFile('file.txt','Contenuto del file', err => {
            if(err){
                console.log('Errore nella scrittura del file',err);
                return;
            }
            
            console.log('File creato');
        })
    }

    static eliminaFile(){
        //Elimina solo files
        fs.unlink('file.txt', err => {
            if(err){
                console.log('Errore nell\'eliminazione del file',err);
                return;
            }
            
            console.log('File eliminato');
        })
    }

}

//per testare quiesto script devi lanciare il comando:
//node crea-rimuovi-file-cartelle seguito da uno dei sueguenti argomenti:
//crea-cartella, elimina-cartella, crea-file, elimina-file

process.argv.forEach( arg => {
    
    switch(arg){
        case 'crea-cartella':
            ManageFiles.creaCartella();
        break;
        case 'elimina-cartella':
            ManageFiles.eliminaCartella();
        break;
        case 'crea-file':
            ManageFiles.creaFile();
        break;
        case 'elimina-file':
            ManageFiles.eliminaFile();
        break;
    }

});