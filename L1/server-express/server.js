const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res
    .status(200)
    .send('Ciao Dal server express');
})

const pizze = [
    {
        gusto: 'Margherita',
        prezzo: 5
    },
    {
        gusto:'Diavola',
        prezzo: 1
    }
]

server.get('/pizze', (req, res) => {
    res
    .status(200)
    .send(pizze);
})

server.get('/pizze/:index', (req, res) => {

    const { index } = req.params;

    res
    .status(200)
    .send(pizze[index]);
})

server.listen(8000, () => {
    console.log(`Server up and running on port 8000`);
});