var btn;
//DOM0级事件处理程序
btn.onclick = function() {
	alert(this.id)
}
btn.onclick = null;
//DOM2级事件处理程序 大多数都是将事件处理程序添加到事件流的冒泡阶段
var handler = function() {
	alert(this.id);
}
btn.addEventListener("click", handler, false);
btn.removeEventListener("click", handler, false);

//IE
btn.attachEvent("onclick", function() {
	alert(this === window); //注意this指向window
});

var EventUtil = {
	addHandler: function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent) {
			element.attachEvent("on" + type, handler);
		}else{
			element["on" + type] = handler;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation: function(event){
		if(event.stopPropagation) {
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	removeHandler: function(element, type, handler) {
		if(element.removeEventListener) {
			element.remvoeEventListener(type, handler, false);
		}else if(element.detachEvent) {
			element.detachEvent("on" + type, handler, false);
		}else{
			element["on" + type] = null;
		}
	}
}

//绑定多个事件
var handler = function(event) {
	switch(event.type) {
		case "click":
			alert("Clickedd");
			break;
		case "mouseover":
			event.target.style.backgroundColor = "red";
			break;
		case "mouseout":
			event.target.style.backgroundColor = "";
			break;
	}
};
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

link.onlick = function(event) {
	event.preventDefault();
}

btn.onclick = function(event) {
	alert("Clicked");
	event.stopPropagation();
}

document.body.onclick = function(event) {
	alert("Body clicked");
}

btn.onclick = function(event) {
	alert(event.eventPhase); //2 this == event.target == event.currentTarget = document.getElementById("myBtn")
}
document.body.addEventListener("click", function(event) {
	alert(event.eventPhase); //1 this == event.currentTarget == document.body
}, true);
document.body.onclick = function(event) {
	alert(event.eventPhase); //3 this == event.currentTarget == document.body
}

//IE事件对象
btn.onclick = function(){
	var event = window.event; //DOM0级事件中在window对象中取event对象
	alert(event.type);
}
btn.attachEvent = function(event) {
	alert(event.type);
}

btn.onclick = function() {
	alert(window.event.srcElement === this);
}

btn.attachEvent("onclick", function(event) {
	alert(event.srcElement === this);
})

link.onclick = function() {
	window.event.returnValue = false;
}

btn.onclick = function() {
	alert("Clicked");
	window.event.cancelBubble = true;
}

btn.onclick = function(event) {
	event = EventUtil.getEvent(event);
	EventUtil.stopPropagation(event);
}

//load事件(所有资源加载完毕)
EventUtil.addHandler(window, "load", function(event) {
	alert("Loaded!");
});
EventUtil.addHandler(window, "load", function(event) {
	var image = document.creatElement("img");
	EventUtil.addHandler(image, "load", function(event) {
		event = EventUtil.getEvent(event);
		alert(EventUtil.getTarget(event).src);
	});
	document.body.appendChild(img);
	image.src = "smile.gif";
});
EventUtil.addHandler(window, "load", function(event) {
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	EventUtil.addHandler(link, "load", function(event) {
		alert("css loaded");
	});
	link.href = "example.css";
	document.getElementsByTagName("head")[0].appendChild(link);
});

//事件代理
var list = document.getElementById("myLinks");
EventUtil.addHandler(list, "click", function(event) {
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	switch (target.id)
	{
	case "doSomething":
		document.title = "I changed the document's title";
		break;
	case "goSomewhere":
		location.href = "http://www.wrox.com";
		break;
	}
});
//内存泄漏，移除便签之前，先移除事件处理程序
btn.onclick = function() {
	//先执行某些操作
	btn.onclick = null; //移除事件处理程序
	document.getElementBy("myDiv").innerHTML = "Processing..."
};