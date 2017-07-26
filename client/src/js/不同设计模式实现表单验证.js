/**
 * author: TurboLoong
 * date: 2017/7/27
 * descriptioin:
 */
/**
 *@author: TurboLoong
 *@date: 2017/7/27
 *@des: 1.定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
 * 2.定义一系列的算法，把它们各自封装成策略类，算法被封装在策略类内部的方法里。
 * 在客户对 Context发起请求的时候，Context总是把请求委托给这些
 策略对象中间的某一个进行计算。
 3.多态在策略模式中的体现
 */
// 策略模式
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
var strategies = {
    isNonEmpty: function( value, errorMsg ){ // 不为空
        if ( value === '' ){
            return errorMsg ;
        }
    },
    minLength: function( value, length, errorMsg ){ // 限制最小长度
        if ( value.length < length ){
            return errorMsg;
        }
    },
    isMobile: function( value, errorMsg ){ // 手机号码格式
        if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){
            return errorMsg;
        }
    }
};
var registerForm = document.getElementById( 'registerForm' );

var validataFunc = function(){
    var validator = new Validator(); // 创建一个 validator 对象
    /***************添加一些校验规则****************/
    validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空' );
    validator.add( registerForm.password, 'minLength:6', '密码长度不能少于 6 位' );
    validator.add( registerForm.phoneNumber, 'isMobile', '手机号码格式不正确' );
    var errorMsg = validator.start(); // 获得校验结果
    return errorMsg; // 返回校验结果
}
registerForm.onsubmit = function(){
    var errorMsg = validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if ( errorMsg ){
        alert ( errorMsg );
        return false; // 阻止表单提交
    }
};

/**
 *@author: TurboLoong
 *@date: 2017/7/27
 *@des: 装饰者模式
 */
function beforeFunction(fn, beforeFnArr) {
    return function () {
        for(var i=0,beforeFn;beforeFn = beforeFnArr[i++];){
            if(beforeFn.apply(this, arguments)===false){
                return;
            }
        }
        return fn.apply(this,arguments);
    };
};
function afterFunction(fn, afterFnArr) {
    return function () {
        fn.apply(this,arguments);
        for(var i=0,afterFn;afterFn = afterFnArr[i++];){
            afterFn.apply(this, arguments)
        }
    };
};