const pizzaLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} in pizza router`);
    next();//Permette di passare al middleware successivo nella catena 
}

module.exports = pizzaLogger;