/**
 * Created by TurboLoong on 2016/10/19.
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

var opt = {
    hostname: 'www.dytt8.net',
    path: '/html/gndy/dyzz',
    port: 80
}

function spidergndy(index) {
    http.get('http://www.ygdy8.net/html/gndy/dyzz/list_23_' + index + '.html', function (res) {
        var html = '';
        var movies = [];
        var chunks = [];
        //res.setEncoding('gbk');
        res.on('data', function (chunk) {
            chunks.push(chunk);
        });
        res.on('end', function () {
            var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
            var $ = cheerio.load(html, {decodeEntities: false});
            $('.co_content8 table').each(function () {
                var info = $('tr:nth-child(2) td:nth-child(2) a', this);
                var movie = {
                    name: $(info).text(),
                    url: $(info).attr('href')
                }
                movies.push(movie);
            });
            saveData('./data' + index + '.json', movies);
        })
    }).on('error', function (err) {
        console.log(err);
    })
}

function saveData(path, data) {
    fs.writeFile(path, JSON.stringify(data, null, ' '), function (err) {
        if(err){
            return console.log(err);
        }
        console.log('data saved');
    })
}

function *spider(index) {
    var start = 1;
    while (start < index){
        yield start;
        spidergndy(start);
        start += 1;
    }
}

for(var x of spider(7)){
    console.log(x);
}
