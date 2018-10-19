var express = require('express');
var app = express();
var dotenv = require("dotenv");
dotenv.config({ path: '.env'});

console.log(process.env.PORT);
const LISTENING_PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 3001;

console.log(process.env.TEST_VAL);
// console.log(PORT);



app.get('/users/:id', function (req, res, next) {
    console.log('before request handler');
    next();
});

app.get('/users/:id', function (req, res, next) {
    console.log('handling request');
    res.sendStatus(200);
    next();
});

app.get('/users/:id', function (req, res, next) {
    console.log('after request handler');
    next();
});

app.listen(LISTENING_PORT, function () {
    console.log(`Example app listening on port ${LISTENING_PORT}!`)
});