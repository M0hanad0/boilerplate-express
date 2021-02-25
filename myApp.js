const log = console.log;
const print = log;

var express = require('express');
var app = express();

print("Hello World");
// app.get("/", (_, res) => res.send("Hello Express"));
app.get("/", (_, res) => res.sendFile(`${__dirname}/views/index.html`));

































module.exports = app;
