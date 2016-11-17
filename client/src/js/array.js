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

//数组方法，filter, forEach, map
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

