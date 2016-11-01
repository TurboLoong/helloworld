/**
 * author: TurboLoong
 * date: 2016/11/1
 * descriptioin:
 */
var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(80);

app.get('/', function (req, res) {
    res.sendfile('./client/html/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my ohter event', function (data) {
        console.log(data);
    });
});