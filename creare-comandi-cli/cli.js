console.log(process.cwd());//Mostra la cartella in cui processo è eseguito 

//Realizziamo 1 script che gestisca 2 argomenti. Saluto ed un nome e restituisca il saluto concatenato al nome 

const args = process.argv.slice(2);
console.log(args);

if(args.length === 0){
    console.log('Nessun argomento fornito');
    process.exit(1)
}

const [primo, secondo] = args;

if(primo === 'saluta' && !secondo){

    console.log('Argomento nome nacante');
    process.exit(1)    
    
}

if(primo === 'saluta' && secondo){
    console.log(`Ciao ${secondo}`);
    process.exit(0)
}
