const EventEmitter = require('events');

const evt = new EventEmitter();

//mi metto in ascolto di un evento
evt.on('onData', (data) => {
    console.log('Dati ricevuti:', data);
});

evt.emit('onData','Hello World!');
evt.emit('onData','Hello World!');
evt.emit('onData','Hello World!');
evt.emit('onData','Hello World!');