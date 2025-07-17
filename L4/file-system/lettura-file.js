const fs = require('fs');

const file = 'file-da-leggere.json';

fs.readFile(file, (err, data) => {
    if(err){
        console.log('Error:',err);
        return;
    }

    console.log('Dati senza indicare la codifica',data);//buffer perché manca la codifica
})

fs.readFile(file, (err, data) => {
    if(err){
        console.log('Error:',err);
        return;
    }

    console.log('dati con uso di toString()',data.toString('utf8'));//string
})

fs.readFile(file, 'utf8', (err, data) => {
    if(err){
        console.log('Error:',err);
        return;
    }

    console.log('dati con uso di parametro utf8', data);//string
})

fs.readFile(file, (err, data) => {
    if(err){
        console.log('Error:',err);
        return;
    }

    try{
        const content = JSON.parse(data);
        console.log('Contenuto parsato', content);//object
    }catch(parseError){
        console.log('Error parsing JSON: ', parseError);
        
    }
    
})