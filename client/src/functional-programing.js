/**
 * Created by Turbo Loong on 2016/9/23.
 */
var fs = require('fs');
var Db;
fs.readFile('freaky_friday.txt', Db.save.bind(Db));
var memoize = function(f) {
    var cache = {};
    return function() {
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] =cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
    }
}