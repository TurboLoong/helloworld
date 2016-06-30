let s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2
s.has("hello") === true;
for(let key of s.values())
    console.log(key);

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

//class definition
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