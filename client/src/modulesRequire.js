/**
 * author: TurboLoong
 * date: 2016/11/17
 * descriptioin:
 */
var r = /require\(\s*"(.*)"\s*\)/g;
var cache = {};    // 文件缓存
var relation = []; // 依赖过程控制
var obj = {};      // xhr 管理对象

//辅助函数，获取键值数组
Object.keys = Object.keys || function(obj){
        var a = [];
        for(a[a.length] in obj);
        return a ;
    };

// 入口函数
function start(str){
    while(match = r.exec(str)){
        obj[match[1]] = new XMLHttpRequest();
        require(obj[match[1]], match[1]);
    }
}

// 递归请求
var require = function(xhr, path){
    //记录依赖过程
    relation.push(path);

    xhr.open("GET", path, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var res = xhr.responseText;
            // 缓存文件
            cache[path] = res;
            // 从xhr对象管理器中删除已经加载完毕的函数
            delete obj[path];

            // 如果obj为空则触发 allLoad 事件
            Object.keys(obj).length == 0 ? Event.trigger("allLoad") : void 0;
            //递归条件
            while(match = r.exec(res)){
                obj[match[1]] = new XMLHttpRequest();
                require(obj[match[1]], match[1]);
            }
        }
    }
    xhr.send();
};