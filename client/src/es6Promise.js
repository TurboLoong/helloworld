/**
 * author: TurboLoong
 * date: 2016/10/26
 * descriptioin:
 */
/**
 * author: TurboLoong
 * date: 2016/10/26
 * descriptioin:
 */
function pms1() {
    "use strict";
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('执行任务1');
            resolve('执行任务1成功');
        }, 2000);
    });
}
function pms2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('执行任务2');
            resolve('执行任务2成功');
        }, 2000);
    });
}
function pms3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('执行任务3');
            resolve('执行任务3成功');
        }, 2000);
    });
}
pms1().then(function (data) {
    console.log('第一个回调:' + data);
    return pms2();
}).then(function (data) {
    console.log('第二个回调' + data);
    return pms3();
}).then(function (data) {
    console.log('第3个回调' + data);
    return '还么完，该结束了吧!';
}).then(function (data) {
    console.log(data);
})
function pms1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 10);
            if(num <= 5){
                resolve(num);
            }else{
                reject('数字太大了');
            }
        }, 2000);
    });
}
setInterval(function () {
    pms1().then(function (data) {
        console.log(data);
    }, function (data) {
        console.log(data);
    })
}, 2000)