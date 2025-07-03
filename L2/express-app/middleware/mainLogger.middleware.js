const mainLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();//Permette di passare a middleware successivo nella catena 
}

module.exports = mainLogger;