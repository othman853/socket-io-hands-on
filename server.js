'use strict';

var routes = require('./routes');
var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', routes.root);

app.listen(3000, () => console.log('Up'));
