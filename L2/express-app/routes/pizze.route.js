const express = require('express');
const pizze = express.Router();

const pizzeController = require('../controllers/pizze.controller');
const unavailableIds = require('../middleware/unavilabIeIds.middleware');

const logger = require('../middleware/pizzaLogger.middleware');

pizze.use(logger)//log per le richieste su /pizza/*

pizze.get('/', pizzeController.getAllPizzas);
pizze.get('/:id', unavailableIds, pizzeController.getSinglePizza);

module.exports = pizze;