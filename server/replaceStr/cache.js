/**
 * author: TurboLoong
 * date: 2016/11/28
 * descriptioin:
 */
var fs = require('fs');
var path = require('path');
var time = new Date().getTime();
fs.readFile('dist/app/app.js', function (err, data) {
    if(err){
        console.log("读取json文件出错");
    }
    console.log(data.toString().replace(/\.html/g, '.html?t=' + time));
});
