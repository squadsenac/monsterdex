const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monstroSchema = new Schema({
    nome: String,
    tipo: String,
    tipoataque: String
});


module.exports = mongoose.model("monstro", monstroSchema);