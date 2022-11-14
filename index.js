const express = require("express");
var path = require('path');
var indexRouter = require('./routes/monstros');

const cfg = {
    port: process.env.PORT || 3000
};

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(cfg.port, () => {
    console.log(`Listening at http://localhost:${cfg.port}`)
})

module.exports = app;