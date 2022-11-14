var path = require('path');
var express = require('express');
const app = require('../index');
var router = express.Router();

router.get("/", (req, res, next) => {
   res.render("index");
})

module.exports = router