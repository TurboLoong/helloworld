/**
 * author: TurboLoong
 * date: 2016/11/14
 * descriptioin:
 */
var cluster = require('cluster'),
    factorial = function factorial(num) {
        if(num === 1 || num === 0) return 1;
        else return num*factorial(num-1);
    };
if(cluster.isMaster){
    var numWorkers = require('os').cpus().length;
    console.log('Master cluster setting up ' + numWorkers + ' workers....');
    //创建进程并监听消息
    for(var i = 0; i < numWorkers; i++){
        var worker = cluster.fork();
        worker.on('message', function (message) {
            console.log(message.from + ': ' + message.type + ' ' + message.data.number + ' = ' + message.data.result);
        });
    }
    //监听在线的进程
    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    //主线程向子进程发送消息
    for(var wid in cluster.workers){
        cluster.workers[wid].send({
            type: 'factorial',
            from: 'master',
            data: {
                number: Math.floor(Math.random()*50)
            }
        });
    }

    //监听退出的进程
    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        var worker = cluster.fork();
        worker.on('message', function (message) {
            console.log(message.from + ': ' + message.type + ' ' + message.data.number + ' = ' + message.data.result);
        });
    });
}else {
    process.on('message', function (message) {
       if(message.type === 'factorial'){
           process.send({
               type: 'factorial',
               from: 'Worker ' + process.pid,
               data: {
                   number: message.data.number,
                   result: factorial(message.data.number)
               }
           });
       }
    });
}