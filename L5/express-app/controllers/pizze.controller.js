//Lo scopo dei controller è quello di utilizzare i metodi dei service per elaborare i dati ottenuti dal database (o altre fonti) e fornirli alle rotte 
const pizzeSvc = require('../services/pizze.service');

const getAllPizzas = async (req, res) => {
    const pizze = await pizzeSvc.getPizze();

    res
    .status(200)
    .send(pizze);
}

const getSinglePizza = async (req, res) => {
    const {id} = req.params;

    // if(!id) return
    const pizza = await pizzeSvc.getPizzaById(id)

    if(!pizza) return res.status(404).send({
        message: "Pizza not found"
    });

    res
    .status(200)
    .send(pizza)
}

const createPizza = async(req, res) => {
    const newPizza = await pizzeSvc.createPizza(req.body);
    res.status(201).send(newPizza);
}

const updatePizza = async(req, res) => {
    const updatedPizza = await pizzeSvc.updatePizza(req.params.id, req.body);
    if(!updatedPizza) return res.status(404).send('Pizza non trovata');
    res.status(200).send(updatePizza); 
}

const deletePizza = async(req, res) => {
    const deleted = await pizzeSvc.deletePizza(req.params.id);
    if(!deleted) return res.status(404).send('Pizza non trovata');
    res.status(200).send({message: "Pizza eliminata"});
}

module.exports = {
    getAllPizzas,
    getSinglePizza,
    createPizza,
    updatePizza,
    deletePizza
}