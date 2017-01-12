/**
 * author: TurboLoong
 * date: 2016/12/16
 * descriptioin:
 */
function Scope() {
    this.$$watchers = [];
}
/**
 *@author: TurboLoong
 *@date: 2016/12/17
 *@des: watchFn-监控函数，用于指定所关注的那部分数据
 * listenerFn-用于在数据变更的时候接受提示
 */
/**
 *在作用域上添加数据本身并不会有性能折扣。如果没有监听器在监控某个属性，它在不在作用域上都无所谓。Angular并不会遍历作用域的属性，它遍历的是监听器。
 $digest里会调用每个监控函数，因此，最好关注监听器的数量，还有每个独立的监控函数或者表达式的性能。
 */
Scope.prototype.$watch = function(watchFn, listenerFn, valueEq) {
    var watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn || function() { },
        valueEq: !!valueEq
    };
    this.$$watchers.push(watcher);
};

/**
 *@author: TurboLoong
 *@date: 2016/12/17
 *@des: 基于值得脏检查
 */
Scope.prototype.$$areEqual = function(newValue, oldValue, valueEq) {
    if (valueEq) {
        return _.isEqual(newValue, oldValue);
    } else {
        return newValue === oldValue ||
            (typeof newValue === 'number' && typeof oldValue === 'number' &&
            isNaN(newValue) && isNaN(oldValue));;
    }
};

/**
 *@author: TurboLoong
 *@date: 2016/12/17
 *@des: 需要建立当前值的深拷贝，再赋值给last.否则同一个值的两个引用始终为真
 */
Scope.prototype.$$digestOnce = function() {
    var self  = this;
    var dirty;
    _.forEach(this.$$watchers, function(watch) {
        var newValue = watch.watchFn(self);
        var oldValue = watch.last;
        if (!self.$$areEqual(newValue, oldValue, watch.valueEq)) {
            watch.listenerFn(newValue, oldValue, self);
            dirty = true;
        }
        watch.last = (watch.valueEq ? _.cloneDeep(newValue) : newValue);
    });
    return dirty;
};

Scope.prototype.$digest = function(){
    var ttl = 10;
    var dirty;
    do {
        dirty = this.$$digestOnce();
        if (dirty && !(ttl--)) {
            throw "10 digest iterations reached";
        }
    } while (dirty);
};

var scope = new Scope();
scope.counterByRef = 0;
scope.counterByValue = 0;
scope.value = [1, 2, {three: [4, 5]}];

// Set up two watches for value. One checks references, the other by value.
scope.$watch(
    function(scope) {
        return scope.value;
    },
    function(newValue, oldValue, scope) {
        scope.counterByRef++;
    }
);
scope.$watch(
    function(scope) {
        return scope.value;
    },
    function(newValue, oldValue, scope) {
        scope.counterByValue++;
    },
    true
);


scope.$digest();
console.assert(scope.counterByRef === 1);
console.assert(scope.counterByValue === 1);

// When changes are made within the value, the by-reference watcher does not notice, but the by-value watcher does.
scope.value[2].three.push(6);
scope.$digest();
console.assert(scope.counterByRef === 1);
console.assert(scope.counterByValue === 2);

// Both watches notice when the reference changes.
scope.value = {aNew: "value"};
scope.$digest();
console.assert(scope.counterByRef === 2);
console.assert(scope.counterByValue === 3);

delete scope.value;
scope.$digest();
console.assert(scope.counterByRef === 3);
console.assert(scope.counterByValue === 4);
