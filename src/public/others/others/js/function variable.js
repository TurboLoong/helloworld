//函数声明和函数表达式的区别——函数提升

//递归 使用arguments.callee指向正在执行的函数的指针
function factorial(num){
	if(num <=1 ) {
		return 1;
	}else{
		return num * arguments.callee(num -1);
	}
}
//使用命名函数表达式
var factorial = (function f(num) {
	if(num <= 1) {
		return 1;
	}else{
		return num * f(num - 1);
	}
});

//闭包 有权访问另一个函数作用域中的变量的函数

//闭包与变量
//每个函数的作用域链中都保存着createFuntions()函数的活动对象，所以它们引用的都是同一个变量i，变量i的值都是10
function createFunctions() {
	var result = new Array();
	for(var i = 0; i < 10; i++) {
		result[i] = function() {
			return i;
		}
	}
	return result;
}
function createFunctions() {
	var result = new Array();
	for(var i = 0; i < 10; i++) {
		result[i] = (function(num) {
			return i;
		})(i)
	}
	return result;
}

//关于this 
//匿名函数的执行环境具有全局性，因此其this对象通常指向window
var name = "The Window";
var object = {
	name: "My Object",
	getNameFunc: function() {
		return function() {
			return this.name;
		}
	}
}
alert(object.getNameFunc()()); //"The Window"

//把外部作用域中的this对象保存在一个闭包能够访问到的变量里，就可以让闭包访问该对象了
var name = "The Window";
var object = {
	name: "My Object",
	getNameFunc: function() {
		var that = this;
		return function() {
			return that.name;
		}
	}
}
alert(object.getNameFunc()()); //"My Object"

//内存泄漏 闭包会引用包含函数的整个活动对象
//IE8的问题 如果闭包的作用域链中保存着一个HTML元素，意味着该元素将无法被销毁
function assignHandler() {
	var element = document.getElementById("someElement");
	element.onclick = function() {
		alert(element.id);	
	}
}
//修改
function assignHandler() {
	var element = document.getElementById("someElement");
	var id = element.id;
	element.onclick = function() {
		alert(id);
	}
	element = null;
}

//私有变量 
function MyObject() {
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	this.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	}
}
//静态私有变量
(function() {
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	//构造函数
	MyObject = function() {}
	//公有/特权方法
	MyObject.prototype.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	}
}
)();

(function(){
	var name = ""; //变成一个静态，由所有实例共享的属性
	Person = function(value) {
		name = value;
	}
	Person.prototype.getName = function() {
		return name;
	}
	Person.prototype.setName = function(value) {
		name = value;
	}
})();

Function.prototype.bind = function (ctx) {
	var fn = this;
	return function () {
		fn.apply(ctx, arguments);
	}
}
