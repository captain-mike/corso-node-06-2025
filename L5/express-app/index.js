const express = require('express');
const server = express();
const PORT = 8000;
//nella scorsa lezione mi ero dimenticato importare ed avviare la connessione al database
const connectDB = require('./db')
connectDB();

const pizzasRoute = require('./routes/pizze.route');

const mainLogger = require('./middleware/mainLogger.middleware');

server.use(mainLogger);//log su tutte le richieste
server.use(express.json())

// sever.use(pizzasRoute)//Importa le rotte delle pizze direttamente sul Path "/"
//Ma se voglio posso importare le rotte come sotto rotte di una che definisco in questo file, ad esempio "/pizze"
server.use('/pizze', pizzasRoute);

server.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
})