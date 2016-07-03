//工厂模式
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		return this.name;
	}
	return o;
}
var person1 = createPerson("Tom", 26, "Doctor");

//构造函数模式
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		return this.name;
	}
}

var person1 = new Person("Tom", 27, "Doctor");
person1.constructor == Person; //true
person1 instanceof Person; //true

//将构造函数当做函数
Person("Tom", 27, "Doctor");
window.sayName();

var o = new Object();
Person.call(o, "Tom", 27, "Doctor");
o.sayName();

//构造函数的问题，函数不能共享
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName() {
	return this.name;
}

//原型对象
function Person() {
}
Person.prototype.name = "Tom";
Person.prototype.age = 27;
Person.prototype.job = "Doctor";
Person.prototype.sayName = function() {
	alert(this.name);
}

person1.hasOwnProperty("name"); //false
var keys = Object.keys(Person.prototype);
keys //"name, age, job, sayName"
"name" in person1; //true
person1.name = "Greg";
person1.name; //Greg
person1.hasOwnProperty("name"); //true
var keys = Object.keys(person1); //"name"

delete person1.name //只能删除实例上的属性
person1.name // Tom

//判断是否是原型上的属性
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) &&(name in object);
}
hasPrototypeProperty(person1, "name");

//重写原型对象 如果不指定constructor, 通过instanceof依然为true，但实例的constructor不指向构造函数，而指向object
Person.prototype = {
	constructor: Person, //constructor变成可枚举
	name: "Tom",
	age: 27,
	job: "Doctor",
	sayName: function() {
		alert(this.name);
	}
}
Object.defineProperty(Person.prototype, "constructor", {
	enumerable: false,
	value: Person
});

//组合构造函数模式和原型模式 使用构造函数定义实例属性，使用原型定义共享的属性和方法
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = [];
}
Person.prototype = {
	constructor: Person,
	sayName: function(){
		alert(this.name);
	}
}

//动态原型模式
function Person(name, age, job) {
	//属性
	this.name = name;
	this.age = age;
	this.job = job;
	//方法，只在第一次调用构造函数时调用
	if(typeof this.sayName != "function") {
		Person.prototype.sayName = function() {
			alert(this.name);
		}
	}
}

//寄生构造函数模式
function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	}
	return o;
}

//继承 缺点：（1）子类型共享父类型的实例属性；（2）无法向父类型传递参数
function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
}
function SubType() {
	this.subproperty = false;
}
SubType.prototype = new SuperType(); //超类型的实例赋值给子类型的原型，实现继承
SubType.prototype.getSubValue = function() {
	return this.subproperty;
}
SubType.prototype.getSuperValue = function() {
	return fasle;
}
var superInstance = new SuperType();
	instance = new SubType();
alert(instance.getSuperValue()); //false
alert(superInstance.getSuperValue()); //true

//借用构造函数，解决上面继承的缺点，每个子类型实例都拥有独立的从父类型继承的实例属性
function SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {
	SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black"); //"red,blue,green,black"
var instance2 = new SubType(); //"red,blue,green"

//传递参数
function SuperType(name) {
	this.name = name;
}
function SubType() {
	SuperType.call(this, 'Nicholas');
	this.age = 29;
}
var instance = new SubType();
instance.name //Nicholas
instance.age // 29

//组合继承(会调用两次SuperType构造函数，SuperType的属性：一组在SubType原型中，一组在实例上)
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue"];
}
SuperType.prototype.sayName = functioin() {
	alert(this.name);
}
function SubType(name, age) {
	SuperType.call(this, name); //继承属性 第二次调用SuperType构造函数
	this.age = age;
}
SubType.prototype = new SuperType(); //继承方法 第一次调用SuperType构造函数
SubType.prototype.sayAge = function() {
	alert(this.age);
}

//寄生式继承
function createAnother(original) {
	var clone = object(original);
	clone.sayHi = function() {
		alert("hi");
	}
	return clone;
}

//寄生组合继承 不必为了指定子类型的原型而调用超类型的构造函数，所需要的无非就是超类型原型的一个副本而已
function inheritPrototype(subType, superType) {
	var prototype = object(superType.prototype); //创建一个副本
	prototype.constructor = subType;
	subType.prototype = prototype; 
}
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue"];
}
SuperType.prototype .sayName = function() {
	alert(this.name);
}
function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
	alert(this.age);
}

