/**
 * scoping
 */
//block-scoped variables
let a = [];
for (let i = 0; i < a.length; i++) {
    let x = a[i];
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function() {
        return i * 2;
    }
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

//block-scope functions
{
    function foo() {return 1;}
    foo() === 1;
    {
        function foo () {return 2;}
        foo() === 2;
    }
    foo() === 1;
}

/**
 * arrow functions
 */
//expression bodies
odds = evens.map(v => v+1);
pairs = evens.map(v => ({ even: v, odd: v+1}));
nums = evens.map((v, i) => v + i);

//statement bodies
let nums = [],
    fives = [];
nums.forEach(v => {
   if (v % 5 === 0){
       fives.push(v);
   }
});

//lexical this
this.nums.forEach((v) => {
    if (v % 5 === 0){
        this.fives.push(v);
    }
});

//Array Element finding, 找出第一个符合条件的成员
[1, 2, 3, 4].find(x => x > 3);//4

//Array.from(),将类数组转换为数组对象
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
let arr = Array.from(arrayLike);
//NodeList对象
let ps = document.querySelectorAll('p');
Array.from(ps).forEach((p) => {
    console.log(p);
})
Array.from('hello'); //['h', 'e', 'l', 'l', 'o']
let nameSet = new Set(['a', 'b']);
Array.from(nameSet);
function foo() {
    var args = [...arguments];
}
[...document.querySelectorAll('div')]
Array.from(arrayLike, x => x*x); //第二个参数是对每个元素进行处理
Array.from([1, , 2, , 3],(n) => n || 0);
function typeOf() {
    return Array.from(arguments, value => typeof value);
}

//Array.of(),将一组值转换为数组
Array.of(3, 11, 8);

//arr.entries(), arr.keys(), arr.velues()
for(let index of ['a', 'b'].keys()) {
    console.log(index);
}
for(let [index, elem] of ['a', 'b'].entries()) {
    console.log(index);
}
/**
 * extends parameter handling
 */
//Default parameter values
function f(x, y = 7, z = 42) {
    return x + y + z;
}
f(1) === 50;

//rest parameter
function f (x, y, ...a) {
    return (x + y) * a.length;
}
f(1, 2 , "hello", true, 7) === 9;

//spread operator
var params = ["hello", true, 7];
var ohter = [1,2,...params]; //[1,2,"hello", true, 7]
var str = "foo";
var chars = [...str]; //["f","o","o"];
/**
 * template literals
 */
var customer = {name: "Foo"};
var card = {amount: 7, product: "Bar", unitprice: 42};
message = 'Hello ${customer.name}, want to buy $(card.amount) $(card.product) for a total of $(card.amount * card.unitprice) bucks?';

/**
 * enhanced object properties
 */
//computed proerty names
let obj = {
    foo: "bar",
    ["baz" + quux()]: 42
}
//Method Properties
obj = {
    foo(a, b) {

    },
    bar(x, y) {

    },
    *quux (x, y) {

    }
}
/**
 * destructuring assignment
 */
//Array Matching
var list = [1,2,3];
var [a, , b] = list;
[b, a] = [a, b];

//Object Matching,Shorthand Notaion
var {op, lhs, rhs} = getASTNode();
var {op: a, lhs: {op: b}, rhs: c} = getASTNode();

//Parameter Context Matching
function f([name, val]) {
    console.log(name, val);
}
function g({name: n, val: v}) {
    console.log(n, v);
}
function h({name, val}) {
    console.log(name, val)
}
f(["bar", 42]);
g({name: "foo", val: 7});
h({name: "bar", val: 42});

//fail-soft destructuring
var list = [7, 42];
var [a = 1, b = 2, c = 3, d] = list;
a === 7;
b === 42;
c === 3;
d === undefined;

/**
 * Modules
 */
//value Export/Import
/*
 lib/math.js
 */
export function sum(x, y) {return x + y}
export var pi = 3.141593;
/*
 someApp.js
 */
import * as math from "lib/jquery.min.js"
console.log(math.sum(math.pi, math.pi));
/*
 other.js
 */
//import {sum, pi} from 'lib/jquery.min.js'
console.log(sum(pi, pi));

//ES6 set
let s = new Set();
s.add('hello').add('goodbye').add('hello');
s.size === 2;
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

//class definition, base class
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return 'Shape(${this.id})';
    }
}

//class extends
class Rectangle extends Shape{
    constructor(id, x, y, width, height) {
        super(id, x, y);
    }
    toString() {
        return "Rectangle > " + super.toString();
    }
    //static members
    static defaultReactangle() {
        return new Rectangle("default", 0, 0, 100, 100);
    }
}

class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y);
    }
    toString() {
        return "Circle > " + super.toString();
    }
    //static members
    static defaultCircle() {
        return new Circle("default", 0, 0, 100);
    }
}
var defRectangle = Rectangle.defaultReactangle();
var defCircle = Circle.defaultCircle();

//Getter/Setter
class Rectangle {
    constructor (width, height) {
        this._width = width;
        this._height = height;
    }
    set width (width) { this._width = width; }
    get width () { return this._height; }
    set height (height) { this._height = height}
    get height () { return this._height}
    get area() { return this._width * this._height;}
};
var r = new Rectangle(50, 20);
r.area === 1000;

/**
 * new
 */