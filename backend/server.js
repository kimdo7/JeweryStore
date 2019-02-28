var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, './static')));

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/basic_mongoose1', { useNewUrlParser: true });

require("./server/config/mongoose.js")
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})

