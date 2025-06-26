const http = require('http');

const server = http.createServer((req, res)=>{

    //Imposta intestazioni per una risposta json 
    res.setHeader('Content-Type', 'application/json');

    
    if(req.url === '/api' && req.method === 'GET'){

        const data = {
            message: 'Ciao dal server!',
            time: new Date().toISOString()
        }
        
        res.writeHead(200);
        res.end(JSON.stringify(data));

    }else{
        res.writeHead(404);
        res.end(JSON.stringify({error:'Not found'}));
    }

});


server.listen(3000, ()=>{
    
    console.log('Server in ascolto sulla porta 3000');

})
