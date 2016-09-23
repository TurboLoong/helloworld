function handleResponse(response){
	//处理response
}
var script = document.createElement("script");
script.src = "http://example.com/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);