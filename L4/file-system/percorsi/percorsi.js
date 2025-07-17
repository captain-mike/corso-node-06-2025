const path = require('path');

console.log('__dirname',__dirname);//E:\corsi\node-serale\L4\file-system\percorsi
console.log('process.cwd()',process.cwd());//E:\corsi\node-serale\L4\file-system

//Combina nel modo corretto, più parti di un percorso in modo portabile
console.log( path.join(__dirname,'files') );

console.log('###############################################');

const filePath = '/home/utente/progetto/file.txt';

//recuperare il nome del file
const fileName = path.basename(filePath);
//recuperare directory del file
const dir = path.dirname(filePath);
//recuperare estensione file
const ext = path.extname(filePath);
//ottenere informazioni sul file
const fileInfo = path.parse(filePath);

console.log('filename',fileName);
console.log('dir',dir);
console.log('ext',ext);
console.log('fileInfo',fileInfo);