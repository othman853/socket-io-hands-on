'use strict';

var routes = require('./routes');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.get('/', routes.root);

var httpServer = require('http').createServer(app);
var io = require('socket.io')(httpServer);

httpServer.listen(3000, () => console.log('Up'));

io.on('connect', (socket) => {
  socket.on('sum', (numbers) => {
    socket.emit('sum-result', {result: parseInt(numbers.a) + parseInt(numbers.b) })
  });
});
