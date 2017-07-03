/**
 * author: TurboLoong
 * date: 2017/1/8
 * descriptioin:
 */
var cache = {};
//加入缓存0
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

//将缓存变量cache封闭在multi函数内部，减少页面中的全局变量
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

//封闭小函数
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
//高阶函数实现AOP
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

function beforeFunction() {
    return function (fn, beforeFnArr) {
        return function () {
            for(var i=0,beforeFn;beforeFn = beforeFnArr[i++];){
                if(beforeFn.apply(this, arguments)===false){
                    return;
                }
            }
            return fn.apply(this,arguments);
        };
    };
}

/**
 *@author: TurboLoong
 *@date: 2017/1/17
 *@des: 发布订阅模式
 */
var event = {
    clientList: [],
    listen: function (key, fun) {
        if(!this.clientList[key]){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fun);
    },
    trigger: function(){
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
        if(!fns||fns.length === 0){
            return false;
        }
        for(var i=0,fn; fn = fns[i++];){
            fn.apply(this, arguments);
        }
    }
}

var installEvent = function (obj) {
    for(var i in event){
        obj[i] = event[i];
    }
}

/**
 *@author: TurboLoong
 *@date: 2017/7/4
 *@des: 命令模式：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请
 求的操作是什么，此时希望用一种松耦合的方式来设计软件，使得请求发送者和请求接
 收者能够消除彼此之间的耦合关系
 */

var button1 = document.getElementById( 'button1' );
var setCommand = function (button, func) {
    button.onclick = function(){
        func();
    }
};

//请求的接收者
var MenuBar = {
    refresh: function () {
        console.log('刷新菜单界面');
    },
    undo: function () {
        console.log('撤销操作')
    }
};

//刷新命令，接收者被封闭在闭包产生的环境中，
var RefreshMenuBarCommand = function(receiver){
    return {
        execute: function () {
            receiver.refresh();
        }
    }
}

//撤销命令
var UndoMenuBarCommand = function (receiver) {
    return {
        undo: function () {
            receiver.undo();
        }
    }
}

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);

var undoMenuBarCommand = UndoMenuBarCommand(MenuBar);
setCommand(button1, refreshMenuBarCommand);
setCommand(button1, undoMenuBarCommand);

//回放
var Ryu = {
    attack: function(){
        console.log( '攻击' );
    },
    defense: function(){
        console.log( '防御' );
    },
    jump: function(){
        console.log( '跳跃' );
    },
    crouch: function(){
        console.log( '蹲下' );
    }
};
var makeCommand = function( receiver, state ){ // 创建命令
    return function(){
        receiver[ state ]();
    }
};
var commands = {
    "119": "jump", // W
    "115": "crouch", // S
    "97": "defense", // A
    "100": "attack" // D
};
var commandStack = []; // 保存命令的堆栈
document.onkeypress = function( ev ){
    var keyCode = ev.keyCode,
        command = makeCommand( Ryu, commands[ keyCode ] );
    if ( command ){
        command(); // 执行命令
        commandStack.push( command ); // 将刚刚执行过的命令保存进堆栈
    }
};
document.getElementById( 'replay' ).onclick = function(){ // 点击播放录像
    var command;
    while( command = commandStack.shift() ){ // 从堆栈里依次取出命令并执行
        command();
    }
};