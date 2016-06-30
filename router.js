(function() {
	function Router() {}
	Router.prototype.route = function(path, callback) {
		var url = location.hash.slice(1) || '/';
		//刷新时
		window.addEventListener('load', function() {
			if(url == path) {
				callback && callback();
			}
		}, false);
		//hash变化时的处理
		window.addEventListener('hashchange', function() {
			url = location.hash.slice(1) || '/';
			if(url == path) {
				callback && callback();
			}
		}, false);
	}
});

var content = document.getElementById("content");
function loadContent(text) {
	content[0].innerHTML = text;
}

Router.route('/', function() {
	loadContent('这是首页');
});

Router.route('/page1', function() {
	loadContent('这是页面1');
});