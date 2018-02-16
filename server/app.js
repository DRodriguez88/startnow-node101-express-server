// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var dataFile = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(request, response){
    response.send('No, i mean it REALLY works.');
});

app.get('/data',function(request, response){
    response.send(dataFile);
});

// finally export the express application
module.exports = app;
