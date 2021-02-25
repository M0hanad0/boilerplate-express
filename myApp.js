const log = console.log;
const print = log;

const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + "/public"));

print("Hello World");
// app.get("/", (_, res) => res.send("Hello Express"));
app.get("/", (_, res) => res.sendFile(`${__dirname}/views/index.html`));

app.get("/json", (_, res) => res.json({ "message": "Hello json" }));
































module.exports = app;
