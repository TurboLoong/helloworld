/**
 * author: TurboLoong
 * date: 2017/7/10
 * descriptioin:
 */
// 浅拷贝实现，（1）拷贝原对象的引用，
// 对象
var o1 = {a: 1};
var o2 = o1;
console.log(o1 === o2);  // =>true
// 数组
var o1 = [1,2,3];
var o2 = o1;

// （2）Array.prototype.slice()，拷贝原对象的实例，对基本类型值，复制的是其实例，不会相互影响；对其内部的引用类型值，拷贝的是其引用
var o1 = ['darko', {age: 22}];
var o2 = o1.slice(); // 根据Array.prototype.slice()的特性，这里会返回一个o1的浅拷贝对象

console.log(o1 === o2); // => false，说明o2拷贝的是o1的一个实例

o2[0] = 'lee';
console.log(o1[0]); // => "darko" o1和o2内部包含的基本类型值，复制的是其实例，不会相互影响

o2[1].age = 23;
console.log(o1[1].age); // =>23 o1和o2内部包含的引用类型值，复制的是其引用，会相互影响

function shallowClone(source) {
    if(!source && typeof source!== 'object'){
        throw new Error('error arguments');
    }
    var targetObj = source.constructor === Array?[]:{};
    for(var keys in source){
        if(source.hasOwnProperty(keys)){
            targetObj[keys] = source[keys];
        }
    }
    return targetObj;
}


// 递归实现一个深拷贝
function deepClone(source){
    if(!source && typeof source !== 'object'){
        throw new Error('error arguments', 'shallowClone');
    }
    var targetObj = source.constructor === Array ? [] : {};
    for(var keys in source){
        if(source.hasOwnProperty(keys)){
            if(source[keys] && typeof source[keys] === 'object'){
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepClone(source[keys]);
            }else{
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}

// 利用JSON序列化实现一个深拷贝
//源对象的方法在拷贝的过程中丢失了，这是因为在序列化JavaScript对象时，所有函数和原型成员会被有意忽略
function deepClone(source){
    return JSON.parse(JSON.stringify(source));
}