/**
 * author: TurboLoong
 * date: 2016/11/28
 * descriptioin:
 */
"use strict"
/*var graph = new Graph();
 var myVertices = ['A','B','C','D','E','F','G','H','I'];
 for(var i = 0; i < myVertices.length; i++){
 graph.addVertex(myVertices[i]);
 }
 graph.addTwoWayEdge('A', 'B');
 graph.addTwoWayEdge('A', 'C');
 graph.addTwoWayEdge('A', 'D');
 graph.addTwoWayEdge('C', 'D');
 graph.addTwoWayEdge('C', 'G');
 graph.addTwoWayEdge('D', 'G');
 graph.addTwoWayEdge('D', 'H');
 graph.addTwoWayEdge('B', 'E');
 graph.addTwoWayEdge('B', 'F');
 graph.addTwoWayEdge('E', 'I');*/

/*var shortestPathA = graph.dfs('A', function (u) {
 /!*if(dis>min){
 return;
 }*!/
 if(u=='G'){
 /!*if(min>dis){
 min = dis;
 console.log(min);
 return
 }*!/

 }
 });*/

/*var graph = new Graph();
var myVertices = ['A','B','C','D','E','F'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addOneWayEdge('A', 'B', 2);
graph.addOneWayEdge('A', 'F', 10);
graph.addOneWayEdge('B', 'C', 3);
graph.addOneWayEdge('B', 'F', 7);
graph.addOneWayEdge('C', 'A', 4);
graph.addOneWayEdge('C', 'D', 4);
graph.addOneWayEdge('D', 'F', 5);
graph.addOneWayEdge('F', 'C', 3);
//求最短路径
var min = graph.DFS('A', 'F');
console.log('min--' + min);*/
/*var graph = new Graph();
var myVertices = ['A','B','C','D','E','F'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addOneWayEdge('A', 'B', 1);
graph.addOneWayEdge('A', 'C', 12);
graph.addOneWayEdge('B', 'C', 9);
graph.addOneWayEdge('B', 'D', 3);
graph.addOneWayEdge('C', 'E', 5);
graph.addOneWayEdge('D', 'C', 4);
graph.addOneWayEdge('D', 'E', 13);
graph.addOneWayEdge('D', 'F', 15);
graph.addOneWayEdge('E', 'F', 4);
var dis = graph.dijkstra();
console.log(dis);*/

/*var graph = new Graph();
var myVertices = ['A','B','C','D','E'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addOneWayEdge('A', 'B', 2);
graph.addOneWayEdge('A', 'E', 10);
graph.addOneWayEdge('B', 'C', 3);
graph.addOneWayEdge('B', 'E', 7);
graph.addOneWayEdge('C', 'D', 4);
graph.addOneWayEdge('C', 'E', 6);
graph.addOneWayEdge('D', 'E', 5);
var dis = graph.BellmanFord('A');
console.log(dis);

var tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(17);
tree.insert(5);
tree.insert(19);
tree.insert(28);
tree.insert(46);
tree.insert(12);
tree.insert(7);
tree.insert(22);
tree.insert(25);
tree.insert(99);
tree.insert(36);
tree.insert(92);
tree.inOrderTraverse(function (key) {
    console.log(key);
});*/

/*
var num =11118096;
var result = 0;

getResult(num, result);
function getResult(num, result) {
    result = formmater(num, result, 0);
    console.log(result);
}
function formmater(num, index) {
    num=parseInt(num/10000);
    if(num){
        index++;
        index = formmater(num, index);
    }
    return index
}*/
/*
var x = [];

function createSomeNodes() {
    var div,
        i = 100,
        frag = document.createDocumentFragment();
    for (;i > 0; i--) {
        div = document.createElement("div");
        div.appendChild(document.createTextNode(i + " - "+ new Date().toTimeString()));
        frag.appendChild(div);
    }
    document.getElementById("nodes").appendChild(frag);
}
function grow() {
    x.push(new Array(1000000).join('x'));
    createSomeNodes();
    setTimeout(grow,1000);
}*/

/*var Event = (function () {
    var Event,
        _default = 'default';
    Event = function () {
        var _listen,
            _trigger,
            _remove,
            _shift = Array.prototype.shift,
            _unshift = Array.prototype.unshift,
            namespaceCache = {},
            _create,
            each = function (ary, fn) {
                var ret;
                for(var i = 0, l = ary.length; i < l; i++){
                    var n = ary[i];
                    ret = fn.call(n, i, n);
                }
                return ret;
            };
        _listen = function (key, fn, cache) {
            if(!cache[key]){
                cache[key] = [];
            }
            cache[key].push(fn);
        };

        _remove = function (key, cache, fn) {
            if( cache[ key ]){
                if(fn){
                    for(var i = cache[key].length; i >= 0; i--){
                        if(cache[key][i] === fn){
                            cache[key].splice(i, 1);
                        }
                    }
                }else{
                    cache[key] = [];
                }
            }
        };

        _trigger = function () {
            var cache = _shift.call(arguments),
                key = _shift.call(arguments),
                args = arguments,
                _self = this,
                stack = cache[key];

            if(!stack || !stack.length){
                return;
            }

            return each(stack, function () {
                return this.apply(_self, args);
            });
        };

        _create = function (namespace) {
            var namespace = namespace || _default;
            var cache = {},
                offlineStack = [],
                ret = {
                    listen: function (key, fn, last) {
                        _listen(key, fn, cache);
                        if(offlineStack === null){
                            return;
                        }
                        if(last === 'last'){
                            offlineStack.length && offlineStack.pop()();
                        }else {
                            each(offlineStack, function () {
                                this();
                            });
                        }
                        offlineStack = null;
                    },
                    one: function( key, fn, last ){
                        _remove( key, cache );
                        this.listen( key, fn ,last );
                    },
                    remove: function( key, fn ){
                        _remove( key, cache ,fn);
                    },
                    trigger: function(){
                        var fn,
                            args,
                            _self = this;
                        _unshift.call( arguments, cache );
                        args = arguments;
                        fn = function(){
                            return _trigger.apply( _self, args );
                        };
                        if ( offlineStack ){
                            return offlineStack.push( fn );
                        }
                        return fn();
                    }
                };
            return namespace ?
                ( namespaceCache[ namespace ] ? namespaceCache[ namespace ] :
                    namespaceCache[ namespace ] = ret )
                : ret;
        }
        return {
            create: _create,
            one: function( key,fn, last ){
                var event = this.create( );
                event.one( key,fn,last );
            },
            remove: function( key,fn ){
                var event = this.create( );
                event.remove( key,fn );
            },
            listen: function( key, fn, last ){
                var event = this.create( );
                event.listen( key, fn, last );
            },
            trigger: function () {
                var event = this.create();
                event.trigger.apply( this, arguments );
            }
        }
    }();

    return Event;
})();
/!************** 先发布后订阅 ********************!/
Event.trigger( 'click', 1 );
Event.listen( 'click', function( a ){
    console.log( a ); // 输出：1
});
/!************** 使用命名空间 ********************!/
Event.create( 'namespace1' ).listen( 'click', function( a ){
    console.log( a ); // 输出：1
});
Event.create( 'namespace1' ).trigger( 'click', 1 );
Event.create( 'namespace2' ).listen( 'click', function( a ){
    console.log( a ); // 输出：2
});
Event.create( 'namespace2' ).trigger( 'click', 2 );*/

/*
var remSize = [{size: 0},{size: 1},{size: 2},{size: 3},{size: 4}],
    remData = {size: 2},
    remIndex;

remIndex = -1; // <== Set a default if we don't find it
remSize.some(function(entry, index) {
    console.log(index);
    if (entry.size === remData.size) {
        remIndex = index;
        return true; // <== Equivalent of break for `Array#some`
    }
});*/

/*
var set1 = new Set([1, 2, 3, 4]);
var set2 = new Set([2, 3, 5]);
//合集
var union = new Set([...set1, ...set2]);

//交集
var intersection = new Set([...set1].filter(x => set2.has(x))); //Set(2){2, 3}

//差集
var difference = new Set([...set1].filter(x => !set2.has(x)));  //Set(2){1, 4}

//array 去重
var arr = [1, 2, 2, 3, 3, 4];
var set3 = new Set(arr);
//[...set3]

//array delete
set3.delete(2);
console.log([...set3])
Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

setA.isSuperset(setB); // => true
setA.union(setC); // => Set [1, 2, 3, 4, 5, 6]
setA.intersection(setC); // => Set [3, 4]
se tA.difference(setC); // => Set [1, 2]*/
var toString = Object.prototype.toString;

function isFunction(obj) {
    return toString.call(obj) === '[object Function]'
}

function eq(a, b, aStack, bStack) {

    // === 结果为 true 的区别出 +0 和 -0
    if (a === b) return a !== 0 || 1 / a === 1 / b;

    // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
    if (a == null || b == null) return false;

    // 判断 NaN
    if (a !== a) return b !== b;

    // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;

    // 更复杂的对象使用 deepEq 函数进行深度比较
    return deepEq(a, b, aStack, bStack);
};

function deepEq(a, b, aStack, bStack) {

    // a 和 b 的内部属性 [[class]] 相同时 返回 true
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;

    switch (className) {
        case '[object RegExp]':
        case '[object String]':
            return '' + a === '' + b;
        case '[object Number]':
            if (+a !== +a) return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            return +a === +b;
    }

    var areArrays = className === '[object Array]';
    // 不是数组
    if (!areArrays) {
        // 过滤掉两个函数的情况
        if (typeof a != 'object' || typeof b != 'object') return false;

        var aCtor = a.constructor,
            bCtor = b.constructor;
        // aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦
        if (aCtor == bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) {
            return false;
        }
    }


    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;

    // 检查是否有循环引用的部分
    while (length--) {
        if (aStack[length] === a) {
            return bStack[length] === b;
        }
    }

    aStack.push(a);
    bStack.push(b);

    // 数组判断
    if (areArrays) {

        length = a.length;
        if (length !== b.length) return false;

        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
    }
    // 对象判断
    else {

        var keys = Object.keys(a),
            key;
        length = keys.length;

        if (Object.keys(b).length !== length) return false;
        while (length--) {

            key = keys[length];
            if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false;
        }
    }

    aStack.pop();
    bStack.pop();
    return true;

}
console.log(eq(1 ,1));