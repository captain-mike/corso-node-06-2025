const express = require('express');
const pizze = express.Router();

const pizzeController = require('../controllers/pizze.controller');

pizze.get('/', pizzeController.getAllPizzas);
pizze.get('/:id', pizzeController.getSinglePizza);

module.exports = pizze;