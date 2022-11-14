var path = require('path');
var express = require('express');
const app = require('../index');
var router = express.Router();
const {
   pegarMonstros,
   criarMonstro,
   pegarPorID,
   atualizarMonstro,
   deletarMonstro
}= require("../database/db_montroController");

router.get("/", (req, res, next) => {
   let monstros = res.pegarMonstros;
   res.render("index", {monstro: monstros});
});

router.post("/:id", (req, res, next) => {
   let idMonstro = res.pegarPorID;
   res.render("index", {monstro: idMonstro});
});

router.put("/:id", (req, res, next) => {
   res.atualizarMonstro;
   res.redirect("/");
})

router.delete("/:id", (req, res, next) => {
   res.deletarMonstro;
   res.redirect("/");
})

module.exports = router