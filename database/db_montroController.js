const monstroService = require("./db_services");

exports.pegarMonstros = async (req, res) => {
    try {
      const monstros = await monstroService.pegarTodos();
      res.json({ data: monstros, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.criarMonstro = async (req, res) => {
    try {
      const monstro = await monstroService.criarMonstro(req.body);
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.pegarPorID = async (req, res) => {
    try {
      const monstro = await monstroService.pegarPorID(req.params.id);
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.atualizarMonstro = async (req, res) => {
    try {
      const monstro = await monstroService.atualizarMonstro(req.params.id, req.body);
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.deletarMonstro = async (req, res) => {
    try {
      const monstro = await monstroService.deletarMonstro(req.params.id);
      res.json({ data: monstro, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };