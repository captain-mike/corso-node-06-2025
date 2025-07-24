//Lo scopo dei service è quello di contenere e raggruppare contestualmente delle funzioni che effettuino le query al database o che in qualche altro modo restituiscono dati
const Pizza = require('../models/Pizza');


const getPizze = async () => {
    return await Pizza.find();
}

const getPizzaById = async (id) => {
    return Pizza.findById(id);
}

const createPizza = async (data) => {
    const pizza = new Pizza(data);
    return await pizza.save();
}

const updatePizza = async (id, data) => {
    return await Pizza.findByIdAndUpdate(id, data, {new : true});
}

const deletePizza = async (id) => {
    return await Pizza.findByIdAndDelete(id);
}

module.exports = {
    getPizze,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
}