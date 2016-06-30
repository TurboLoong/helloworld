//数组去重
function unique(a){
	var res = [];
	for(var i = 0, len = a.length; i < len; i++) {
		var item = a[i];
		for(var j = 0, jLen = res.length; j < jLen; j++) {
			if(res[j] === item)
				break;
		}
		if( j === jLlen)
			res.push(item);
	}
	return res;
}

function unique(a) {
	var res = [];
	for(var i = 0, len = a.length; i < len; i++){
		var item = a[i];
		(res.indexOf(item) === -1) && res.push(item);
	}
	return res;
}

function unique(a) {
	var res = a.filter(function(item, index, array) {
		return array.indexOf(item) === index;
	});
	return res;
}

function unique(a) {
	return a.concat().sort().filter(function(item, pos,arr) {
		return !pos || item !== arr[pos - 1];
	});
}

//数组的方法filter，forEach， map
var arr = [
	{"name":"apple", "count": 2},
	{"name":"orange", "count": 5},
	{"name":"pear", "count": 3},
	{"name":"orange", "count": 16},
];
var newArr = arr.filter(function(item) {
	return item.name === "orange";
});
arr.forEach(function(item, index) {
	console.log(item);
});

var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"}]
function getNewArr() {
	return oldArr.map(function(item,index) {
		item.full_name = [item.first_name, item.last_name].join(" ");
		return item;
	});
}

//ES6方法set
let s = new Set();
s.add('hello').add('goodbye').add('hello');
s.size() === 2;
s.has("hello") === true;
for(let key of s.values()) {
	console.log(key);
}

//map
let m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) === 34;
m.size === 2;
for(let [key, val] of m.entries()) {
	console.log(key + "=" + val);
}

//class
class Shape {
	constructor (id, x, y) {
		this.id = id
		this.move(x, y)
	}
	move (x, y) {
		this.x = x
		this.y = y
	}
}

//class extends
class Rectangle extends Shape {
	constructor (id, x, y, width, height) {
		super(id, x, y)
		this.width  = width
		this.height = height
	}
}
class Circle extends Shape {
	constructor (id, x, y, radius) {
		super(id, x, y);
		this.radius = radius;
	}
}