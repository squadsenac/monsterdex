const monstroModel = require("./db_monstros.js");

exports.pegarTodos = async () => {
    return await monstroModel.find();
};

exports.criarMonstro = async (monstro) => {
    return await monstroModel.create(monstro);
};

exports.pegarPorID = async (id) => {
    return await monstroModel.findById(id);
};

exports.atualizarMonstro = async (id, monstro) => {
    return await monstroModel.findByIdAndUpdate(id, monstro);
};

exports.deletarMonstro = async (id) => {
    return await monstroModel.findByIdAndDelete(id);
};