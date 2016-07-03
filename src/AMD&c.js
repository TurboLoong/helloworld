define("alpha", ["require", "exports", "beta"], function(require, exports, beta) {
	exports.verb = function() {
		return beta.verb();
	}
});

define(function(require, exports, module) {
	var a = require('./a');
	a.doSomething();
	var b = require('./b');
	b.doSomething();
});

//AMD
define(['./a', './b'], function(a, b) {
	a.doSomething();
	b.doSomething();
});

seajs.config({
	'base': '/',
	'alias': {
		'jquery': 'jquery.js'
	}
});
define(function(require, exports, module) {
	var $ = require('jquery');
	require('./cookie')($);

});