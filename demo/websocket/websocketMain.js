/**
 * author: TurboLoong
 * date: 2016/11/2
 * descriptioin:
 */
var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

io.set('log level', 1);
//websocket连接接听
io.on('connection', function (socket) {
    socket.emit('open');//通知客户端已连接

    //打印握手消息
    console.log(socket.handshake);

    //构造客户端对象
    var client = {
        socket: socket,
        name: false,
        color: getColor()
    }

    //对message事件监听
    socket.on('message', function (msg) {
        var obj = {time: getTime(), color: client.color};

        // 判断是不是第一次连接，以第一条消息作为用户名
        if(!client.name){
            client.name = msg;
            obj['text'] = client.name;
            obj['author'] = 'System';
            obj['type'] = 'welcome';
            console.log(client.name + ' login');

            //返回欢迎语
            socket.emit('system', obj);
            //广播新用户已登录
            socket.broadcast.emit('system', obj);
        }else{
            //如果不是第一次的连接，正常的聊天消息
            obj['text'] = msg;
            obj['author'] = client.name;
            obj['type'] = 'message';
            console.log(client.name + 'say: ' + msg);

            //返回消息（）
            socket.broadcast.emit('message', obj);
        }
    });
    socket.on('disconnect', function () {
       var obj = {
           time: getTime(),
           color: client.color,
           author: 'System',
           text: client.name,
           type: 'disconnect'
       }

        //广播用户已退出
        socket.broadcast.emit('system', obj);
        console.log(client.name + ' Disconnect');
    });
});

//express基本配置
app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

// 指定webscoket的客户端的html文件
app.get('/', function(req, res){
    res.sendfile('views/index.html');
});

server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

var getTime=function(){
    var date = new Date();
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

var getColor = function () {
    var colors = ['aliceblue','antiquewhite','aqua','aquamarine','pink','red','green',
        'orange','blue','blueviolet','brown','burlywood','cadetblue'];
    return colors[Math.round(Math.random()*1000%colors.length)];
}