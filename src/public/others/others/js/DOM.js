let someNode;
// 确定节点的类型
// IE中无效，
if (someNode.nodeType === Node.ELEMENT_NODE) {
  alert('Node is an element');
}

// 节点的属性：nodeType, nodeName, nodeValue, childNodes, ownerDocument
// 节点的方法：appendChild,
// 适用所有浏览器
if (someNode.nodeType == 1) {
  alert('Node is an element');
}

// nodeName和nodeValue属性
if (someNode.nodeType == 1) {
  tagName = someNode.nodeName; // nodeName的值是元素的标签名
}

// NodeList
const firstChild = someNode.childNodes[0];
const secondChild = someNode.childNodes.item(1);
const count = someNode.childNodes.length;

// 将NodeList对象转换为数组
const arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0); // IE8除外
function convertToArray(nodes) {
  let array = null;
  try {
    array = Array.prototype.slice.call(nodes, 0);
  } catch (ex) {
    array = new Array();
    for (let i = 0, len = nodes.length; i < len; i++) {
      array.push(nodes[i]);
    }
  }
  return array;
}

someNode.nextSibling;
someNode.previousSibling;
someNode.firstChild;
someNode.lastChild;

// 操作节点 appendChild, insertBefore,replaceChild, removeChild, cloneNode
var returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true

var returnedNode = someNode.appendChild(someNode.firstChild);
returnedNode == someNode.fistChild; // false
returnedNode == someNode.lastChild; // true

// cloneNode
/* <ul>
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
</ul> */
const deepList = myList.cloneNode(true);
deepList.childNodes.length; // 3(IE < 9, 不会为空白字符创建节点) 或 7(其他浏览器)
const shallowList = myList.cloneNode(false);
shallowList.childNodes.length; // 0
// 在IE中它会复制事件处理程序，所以建议在复制之前最好先移除事件处理程序

// 文档的子节点, document是HTMLDocument的一个实例
/* <html>
	<body>
	</body>
</html> */
document.documentElement === document.childNodes[0]; // 指向HTML
document.body; // 指向body

document.title;
document.URL;
document.domain;
document.referrer;
// 假设页面来自p2p.wrox.com域
document.domain = 'wrox.com'; // 成功
document.domain = 'nczonline.com'; // 失败
// 当页面中包含来自其他子域的框架或内嵌框架时，能够设置document.domain就非常方便。由于跨域安全限制，来自不同子域的页面无法通过javascrip通信。而通过将每个页面的document.domain设置为相同的值，这些页面就可以互相访问对方包含的javascrip对象了。

// 查找元素getElementById, getElementByTagName
// <div id="myDiv">Some text</div>
var div = document.getElementById('myDiv');
var div = document.getElementById('mydiv');// IE中可以取到。注意IE8不区分ID的大小写
// <input type = "text" name = "myElement" value = "Text field">
// 如果表单元素的name特性等于指定的ID，而且该元素在文档中位于带有给定ID的元素前面，IE会返回那个表单元素
// <div id = "myElement">A div</div>
document.getElementById('myElement');// IE中返回input元素，其他浏览器返回div；最好不让表单元素的name特性与其他元素的ID相同

// getElementsByTagName 返回HTMLCollection类型
const images = document.getElementsByTagName('img'); // 返回HTMLCollection对象，也是一个“动态”集合
images.length;
images[0].src;
images.item(0).src;

// 通过元素的name特性取得集合中的项
// <img src = "myimage.git" name = "myImage">
var { myImage } = images;
var myImage = images.namedItem('myImage');
// IE将Comment实现为元素

document.getElementsByName(); // 常用的是取得单选按钮，单选按钮必须具有相同的name特性。

// Element类型
// <div id = "myDiv"></div>
var div = document.getElementById('myDiv');
div.tagName; // "DIV"，注意标签名始终是大学
div.tagName == div.nodeName; // true
if (element.tagName.toLowerCase() == 'div') { // 要这样比较
}

// 取得特性, 特性的名称是不区分大小写的，“ID”，“id”一样；不建议使用，只有在取得自定义特性值的情况下，才会使用getAttribute()方法
var div = document.getElementById('myDiv');
div.getAttribute('id');
div.getAttribute('my_special_attribute');
div.my_special_attribute; // undefined，IE中有(自定义特性在IE中会创建属性，在其他浏览器中属性不存在)

// 设置属性
div.setAttribute('id', 'someOtherId'); // 可以用来设置自定义特性
div.id = 'someOtherId';
div.mycolor = 'red'; // 不可以添加自定义属性（IE除外）
div.getAttribute('mycolor');// null(IE除外)

// 创建元素document.createElement(创建的标签名)
var div = document.createElement('div');
div.id = 'myNewDiv';
div.className = 'box';

// 元素的子节点childNodes
/* <ul>
	<li>item 1</li>
	<li>item 2</li>
	<li>item 3</li>
</ul> */
// IE中有3个（3个<li>元素），其他浏览器有7个（还包括4个文本节点，<li>元素之间的空白符）
// <ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>
// 所有浏览器都是3个子元素
// 在执行某项操作前，先检查nodeType属性
for (var i = 0, len = element.childNodes.length; i < len; i++) {
  if (element.childNodes[i].nodeType == 1) {

  }
}
var ul = document.getElementById('myList');
const items = ul.getElementsByTagName('li'); // 会返回所有后代元素

// DocumentFragment
// 为<ul>元素添加3个列表项
// <ul id = "myList"></ul>
const fragment = document.crateDocumentFragment();
var ul = document.getElementById('myList');
let li = null;
for (var i = 0; i < 3; i++) {
  li = document.createElement('li');
  li.appendChild(document.createTextNode(`Item ${i + 1}`));
  fragment.appendChild(li);
}
ul.appendChild(fragment);

// DOM操作技术
// 动态脚本
function loadScript(url) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'client.js';
  document.body.appendChild(script);
}
loadScript('client.js');
// 动态样式
function loadStyles(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
}
loadStyles('style.css');

// 使用NodeList; 应该尽量减少访问NodeList的次数，因为每次访问都会运行一次基于文档的查询，可以将其缓存起来。
const divs = document.getElementsByTagName('div');
var div;

for (var i = 0, len = divs.length; i < len; i++) {
  div = document.createElement('div');
  document.body.appendChild(div);
}
