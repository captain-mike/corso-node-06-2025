//Lo scopo dei controller è quello di utilizzare i metodi dei service per elaborare i dati ottenuti dal database (o altre fonti) e fornirli alle rotte 
const userSvc = require('../services/pizze.service');

const getAllPizzas = async (req, res) => {
    const pizze = await userSvc.getPizze();

    res
    .status(200)
    .send(pizze);
}

const getSinglePizza = async (req, res) => {
    const {id} = req.params;

    // if(!id) return
    const pizza = await userSvc.getPizzaById(id)

    if(!pizza) return res.status(404).send({
        message: "Pizza not found"
    });

    res
    .status(200)
    .send(pizza)
}

module.exports = {
    getAllPizzas,
    getSinglePizza
}