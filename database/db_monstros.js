const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monstro = new Schema({
    nome: String,
    tipo: String,
    tipoataque: String,
}, {
    collection: "monstro"
});


module.exports = mongoose.model("monstro", monstro);