const EventEmitter = require('events');
const evt = new EventEmitter();

function showData(data){
    console.log(data);
}

evt.addListener('onData',showData);

evt.emit('onData','Ciao Mondo!')