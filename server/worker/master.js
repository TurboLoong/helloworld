/**
 * author: TurboLoong
 * date: 2016/11/14
 * descriptioin:
 */
var childprocess = require('child_process');
var worker = childprocess.fork('./worker.js');

console.log('pid in master:', process.pid);

worker.on('message', function (msg) {
    console.log('1:', msg);
});

process.on('message', function (msg) {
   console.log('2:', msg); 
});

worker.send('---');

process.emit('message', '------');

