define(["credits", "products"], function(credits, products) {
	console.log("Function: purchaseProduct");
	return {
		purchaseProduct: function() {
			var credit = credits.getCredits();
			if(credit > 0) {
				products.reserveProduct();
				return true;
			}
			retur false;
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

var obj = str.parseJSON();
var obj = JSON.parse(str);

var last = obj.toJSONString();
var last = JSON.stringfy(obj);

