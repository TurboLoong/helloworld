/**
 * author: TurboLoong
 * date: 2016/11/17
 * descriptioin:
 */
var _this = this;
/**
 *@author: TurboLoong
 *@date: 2016/11/17
 *@param:
 *@des: 对象数组快速排序
 */
exports.sortObj = function (arr, key, dir) {
    key = key || 'id';
    dir = dir || 'asc';
    if(arr.length == 0) return [];
    var left = new Array();
    var right = new Array();
    var pivot = arr[0][key]; //分隔值
    var pivotObj = arr[0];//存储值

    if(dir === 'asc'){ //升序
        for(var  i = 1; i < arr.length; i++){
            arr[i][key] < pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }else{//降序
        for(var i = 1; i < arr.length; i++){
            arr[i][key] > pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }
    return _this.sortObj(left, key, dir).concat(pivotObj, _this.sortObj(right, key, dir));

}