const log = console.log;
const print = log;

var express = require('express');
var app = express();

print("Hello World");

app.get("/", (_, res) => res.send("Hello Express"));

































module.exports = app;
