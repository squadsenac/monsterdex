const monstroService = require("./db_services.js");

exports.pegarMonstros = async (req, res) => {
    try {
      const monstros = await monstroService.pegarMonstros();
      res.json({ data: monstros, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.criarMonstro = async (req, res) => {
    try {
      const monstro = await monstroService.criarMonstro();
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.pegarPorID = async (req, res) => {
    try {
      const monstro = await monstroService.pegarPorID();
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.atualizarMonstro = async (req, res) => {
    try {
      const monstro = await monstroService.atualizarMonstro();
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.deletarMonstro = async (req, res) => {
    try {
      const monstro = await monstroService.deletarMonstro();
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };