const log = console.log;
const print = log;

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

print("Hello World");
// app.get("/", (_, res) => res.send("Hello Express"));
app.get("/", (_, res) => res.sendFile(`${__dirname}/views/index.html`));
































module.exports = app;
