//离线检测，navigator.onLine
EventUtil.addHandler(window, "online", function(){});
EventUtil.addHandler(window, "offline", function(){});

//应用缓存appcache, API的核心是applicationCache对象

//数据存储
//Cookie, 
//响应 要求服务器对任意HTTP请求发送Set-Cookie HTTP头作为响应的一部分。
HTTP/1.1 200 OK 
Content-type: text/html  
Set-Cookie: name=value //name和value都必须是URL编码
Other-header: other-header-value

//请求 为每个请求添加Cookie HTTP头将信息发送回服务器
GET /index.html HTTP/1.1 
Cookie: name=value 
Other-header: other-header-value

//限制
//cookie在性质上是绑定在特定的域名下的。当设定cookie后，再给创建它的域名发送请求时，都会包含这个cookie.
//最好将整个cookie长度限制在4095B（含4095）以内。尺寸限制影响到一个域下所有的cookie，而并非每个cookie单独限制。如果创建超过最大尺寸限制的cookie, 该cookie会被丢掉。

//cookie的构成
HTTP/1.1 200 OK Content-type: text/html Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com Other-header: other-header-value
//注意，域，路径，失效时间和sucure标志都是服务器给浏览器的指示，以指定何时应该发送cookie.这些参数并不会作为发送到服务器的cookie信息的一部分，只有名值对才会被发送

//JavaScript中的cookie
//document.cookie返回当前页面可用的所有cookie的字符串
name1=value1;name2=vlaue2;name3=value3

//WEB 存储机制 Storage
//提供一种在cookie之外存储会话数据的途径
//提供一种存储大量可以跨会话存在的数据机制
//clear(); getItem(name); key(index); removeItem(name); setItem(name, value) 

//sessionStorage对象 
//只保存到浏览器关闭, 数据可以跨页面刷新而存在
//存储在sessionStorage中的数据只能由最初给对象存储数据的页面访问到
//sessionStorage对象主要用于仅针对会话的小段数据的存储。
for(var i = 0, len = sessionStorage.length; i < len; i++) {
	var key = sessionStorage.key(i);
	var value = sessioinStorage.getItem(key);
	alert(key + "=" + value);
}
//只适用于IE8
sessionStorage.begin();
sessionStorage.name = "Tom";
sessionStorage.book = "Professional Javascript";
sessionStorage.commit();

//localStorage对象 用于跨会话持久化数据并遵循跨域安全策略
//要访问同一个localStorage对象，页面必须来自同一个域名（子域名无效），使用同一种协议，在同一个端口上。
//数据会永久保存的，保留到通过JavaScript删除或者是用户清除浏览器缓存
//length，getItem, setItem, removeItem, clear,
var userData = {
	name: "Tome",
	age: 24
}
localStorage.setItem("userData", JSON.stringify(userData));
var newUserData = JSON.parse(localStorage.getItem("userData"));
localStorage.removeItem("userData");

//sessionStorage和localStorage的主要差别是数据的保存时长及数据的共享方式

//storage事件，当修改Storage类型数据时，会触发
//event对象的属性：domain, key, newValue, oldValue
EventUtil.addHandler(document, "storage", function(event) {
	alert(event.domain);
});

//回退
function createCookie(name, value, days) {
	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

functin readCookie(name) {
	var result = "";
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for(var i = 0;i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == '') 
		{
			c = c.substring(1, c.length);
		}
		if(c.indexOf(nameEQ) == 0){
			result = c.substring(nameEQ.length, c.length);
		}else{
			result = "";
		}
	}
	return result;
}


