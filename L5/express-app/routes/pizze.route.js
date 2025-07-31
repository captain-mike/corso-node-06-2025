const express = require('express');
const pizze = express.Router();

const pizzeController = require('../controllers/pizze.controller');

const logger = require('../middleware/pizzaLogger.middleware');

pizze.use(logger)//log per le richieste su /pizza/*

//sottinteso /pizze
pizze.get('/', pizzeController.getAllPizzas);
pizze.get('/:id', pizzeController.getSinglePizza);
pizze.post('/', pizzeController.createPizza);
pizze.put('/:id', pizzeController.updatePizza);
pizze.delete('/:id',pizzeController.deletePizza);

module.exports = pizze;