/**
 * Created by TurboLoong on 2016/10/18.
 */
var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
    var start = new Date;
    console.log('x-response-time:start:---' + start.getTime());
    yield next;
    var ms = new Date - start;
    console.log('x-response-time:ms:------' + ms);
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
    var start = new Date;
    console.log('logger:start:---' + start.getTime());
    yield next;
    var ms = new Date - start;
    console.log('logger:ms:------' + ms);
});

// response

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);