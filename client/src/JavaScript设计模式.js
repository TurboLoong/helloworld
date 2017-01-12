/**
 * author: TurboLoong
 * date: 2017/1/8
 * descriptioin:
 */
var cache = {};
var mult = function () {
    var args = Array.prototype.join.call(arguments, ',');
    if(cache[args]){
        return cache[args];
    }
    var a = 1;
    for(var i = 0, l = arguments.length; i < 1; i++){
        a = a * arguments[i];
    }
    return cache[args] = a;
};

var mutl = (function () {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if(args in  cache){
            return cache[args];
        }
        var a = 1;
        for(var i = 0, l = arguments.length; i < 1; i++){
            a = a * arguments[i];
        }
        return cache[args] = a;
    }
})();
var mult = (function () {
    var cache = {};
    var calculate = function () {
        var a = 1;
        for(var i = 0, l = arguments.length; i < 1; i++){
            a = a * arguments[i];
        }
        return a;
    };
    return function () {
        var args =  Array.prototype.join.call(arguments,',');
        if(args in cache){
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
})();

/**
 *@author: TurboLoong
 *@date: 2017/1/8
 *@des: AOP
 */

Function.prototype.before = function (beforeFn) {
    var _self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    }
};

Function.prototype.after = function (afterFun) {
    var _self = this;
    return function () {
        afterFun.apply(this, arguments);
        return _self.apply(this, arguments);
    }
};

var func = function () {
    console.log(2);
};
func = func.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
});
//func();

/**
 *@author: TurboLoong
 *@date: 2017/1/11
 *@des: 单例模式
 */
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};
var createSingleIframe = getSingle(function () {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    return iframe;
});
var createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};

/**
 *@author: TurboLoong
 *@date: 2017/1/11
 *@des: 策略模式
 */
var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
};

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
}

var strategies = {
    isNonEmpty : function (value, errorMsg) {
        if(value === ''){
            return errorMsg;
        }
    },
    minength: function (value, length, errorMsg) {
        if(value.length < length){
            return errorMsg;
        }
    }
};

var Validator = function () {
    this.cache = [];
};
Validator.prototype.add = function (dom, rule, errorMsg) {
    var ary = rule.split(':');
    this.cache.push(function () {
        var strategy = arr.shift();
        ary.unshift(dom.value);
        ary.push(errorMsg);
        return strategies[strategy].apply(dom, ary);
    })
};
Validator.prototype.start = function () {
    for(var i, validatorFunc; validatorFunc = this.cache[i++];){
        var msg = validatorFunc();
        if (msg){
            return msg;
        }
    }
};
 