const mongoose = require("mongoose");

const pizzaScheme = new mongoose.Schema({
    gusto: {type: String, required: true},
    prezzo: {type: Number, required: true},
})

module.exports = mongoose.model("Pizza", pizzaScheme);