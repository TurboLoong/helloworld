/**
 * scoping
 * @type {Array}
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
//Method Properties
obj = {
    foo(a, b) {

    },
    bar(x, y) {

    },
    *quux (x, y) {

    }
}

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