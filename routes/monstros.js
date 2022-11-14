var express = require('express');
var router = express.Router();
const {
   pegarMonstros,
   criarMonstro,
   pegarPorID,
   atualizarMonstro,
   deletarMonstro,
}= require("../database/db_montroController");

router.get("/index", (req, res, next) => {
   let monstros = pegarMonstros;
   res.render("index", {monstro: monstros});
});

router.route("/").get(pegarMonstros).post(criarMonstro);

router.route("/:id").get(pegarPorID).put(atualizarMonstro).delete(deletarMonstro);

module.exports = router