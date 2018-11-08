var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/', jsonParser, function (req, res) {
    res.send("Hello Would!");
});

app.listen(process.env.PORT || 4000);