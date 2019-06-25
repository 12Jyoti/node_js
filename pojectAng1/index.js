const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    // mongoose = require('mongoose'),
    path = require('path');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
app.use(express.static(__dirname + '/public'));

app.route('/*').get(function(req, res) {
    res.sendFile(path.resolve('./public' + '/partials/home.html'));

});

server.listen(9090, function() {
    console.log("Server is Working in 9090");
});