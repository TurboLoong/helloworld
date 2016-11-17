define(["credits", "products"], function(credits, products) {
	console.log("Function: purchaseProduct");
	return {
		purchaseProduct: function() {
			var credit = credits.getCredits();
			if(credit > 0) {
				products.reserveProduct();
				return true;
			}
			return false;
		}
	}
});

define(function(products) {
	return {
		reserveProduct: function() {
			console.log("Function: reserveProduct");
			return true;
		}
	}
});

//CMD 
define(function(require, exports, module) {
	var a = require('./a');
	a.dosomething();
	var b = require('./b'); //依赖就近书写
	b.something();
});

//AMD
define(["./a", "./b"], function(a, b) {
	a.soSomething();
	b.soSomething();
});

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
