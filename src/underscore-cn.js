/**
 * Created by TurboLoong on 2016/9/14.
 */
(function(){
    var root = this;
    var previousUnderscore = root._;

    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;

    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    var
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind,
        nativeCreate       = Object.create;

    var Ctor = function(){};

    //'_'是一个构造函数
    //支持new调用的构造函数
    var _ = function(obj){
        if(obj instanceof _) return obj;
        if(!(this instanceof _)) return _(obj);
        this._wrapped = obj;
    }
    var optimizeCb = function (func, context, argCount) {
        if(context == void 0) return func;
        switch (argCount == null ? 3 : argCount){
            case 1: return function(value){
                return func.call(context, value);
            };
            case 2: return function(value, other) {
                return func.call(context, value, other);
            };
            case 3: return function(value, index, collection){
                return func.call(context, value, index, collection);
            };
            case 4: return function(accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
        }
        return function(){
            return func.apply(context, arguments);
        };
    }

    var cb = function(value, context, argCount){
        if(value == null) return _.identity;
        if(_.isFunction(value)) return optimizeCb(value, context, argCount);
        if(_.isObject(value)) return _.matcher(value);
        return _.property(value);
    }
    var property = function(key){
        return function(obj){
            return obj == null ? void 0 : obj[key];
        }
    }
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function(collection) {
        var length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };

    _.each = _.forEach = function (obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if(isArrayLike(obj)) {
            for(i = 0, length = obj.length; i < length; i++){
                iteratee(obj[i], i, obj);
            }
        }else{
            var keys = _.keys(obj);
            for(i = 0, length = keys.length; i < length; i++){
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    }

    _.map = _.collect = function(obj, iteratee, context){
        iteratee = cb(iteratee, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length);
        for(var index = 0; index < length; index++){
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    }
}.call(this));