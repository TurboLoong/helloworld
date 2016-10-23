/**
 * Created by TurboLoong on 2016/10/22.
 */

//bubbleSort();
//var arr = [{a: 12}, {b: 35}, {c: 99}, {d: 18}, {e: 76}];

function bubbleSort(a) {
    var length = arr.length;
   for(var i = 0; i < length-1; i++){
       for(var j = 0; j < length-1-i; j++){
           if(arr[j] > arr[j+1]){
               arr[j+1] = [arr[j], arr[j] = arr[j+1]][0];
           }
       }
   }
    console.log(arr);
}

/**
 *@author: TurboLoong
 *@date: 2016/10/23
 *@param: left 左边基准
 *@param: right 右边基准
 *@des: 快速排序
 */
/*var arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
quickSort(0, arr.length-1);
console.log(arr);*/
function quickSort(left, right) {
    var temp;//基准数
    if(left > right)
        return;
    temp = arr[left];
    var i = left;
    var j = right;
    while (i != j){
        //先从右往左找
        while (arr[j] >= temp && i < j){
            j--;
        }
        //再从左往右找
        while (arr[i] <= temp && i < j){
            i++;
        }
        //交换两个数在数组中的位置
        if(i < j){
            arr[j] = [arr[i], arr[i] = arr[j]][0];
        }
    }
    //最终将基准数归为
    arr[left] = arr[i];
    arr[i] = temp;
    quickSort(left, i - 1);
    quickSort(i + 1, right);
}


/*var arr = [6, 3, 1, 7, 5, 8, 9, 2, 4];
var result = [];
exportQQ();
console.log(result);*/
/**
 *@author: TurboLoong
 *@date: 2016/10/23
 *@param: length
 *@des: 队列（FIFO）
 */
function exportQQ(){
    if(arr.length == 1){
        result.push(arr[0]);
        return;
    }
    var head = 0;
    var tempTail;
    //存入删除的数
    result.push(arr[head]);
    //保存移到末尾的数
    tempTail = arr[head + 1];
    //将指针移到第三个数
    head = head + 2;
    //移除前两个数
    arr.splice(0, 2);
    //在数组末尾增添一个数
    arr[arr.length] = tempTail;
    exportQQ();
}

var Tom = [2, 4, 1, 2, 5, 6];
var Bob = [3, 1, 3, 5, 6, 4];
//桌面上的牌
var deskPoker = [];
var book = {};
//当前桌面上的牌出现的次数，0表示没出现过，1表示已经出现
for(var i = 0; i < 10; i++){
    book[i] = 0;
}
//playPoker(Tom,  Bob);
/**
 *@author: TurboLoong
 *@date: 2016/10/23
 *@param: TomPoker
 *@des: 扑克游戏，游戏规则：出牌的那张如何和桌上的一张相同，中间连同相同的那张牌拿走
 * 否则继续叠加在之前牌的上面
 */
function playPoker(mrA, mrB) {
    //Tom出一张牌
    var mrAPoker = mrA.shift();
    //没有出现过，放在桌面上
    if(!checkSame(mrAPoker)){
        deskPoker.push(mrAPoker);
    }else{
        //出现过，出栈，放进手中牌的末尾
        mrA.push(mrAPoker);
        var outPoker;
        while (outPoker = deskPoker.pop() != mrAPoker){
            mrA.push(outPoker);
        }
    }
    //Bob出牌
    var mrBPoker = mrB.shift();
    if(!checkSame(mrBPoker)){
        deskPoker.push(mrBPoker);
    }else{
        //出现过，出栈，放进手中牌的末尾
        mrB.push(mrBPoker);
        var outPoker;
        while (outPoker = deskPoker.pop() != mrBPoker){
            mrB.push(outPoker);
        }
    }
    function checkSame(poker) {
        var flag = true;
        if(!book[poker]){
            book[poker] = 1;
            flag = false;
        }
        //true-出现过；false-没有出现过
        return flag;
    }
    if(!mrA.length){
        console.log("mrB win");
        console.log(mrB);
    }else{
        console.log("mrA win");
        console.log(mrA);
    }
    playPoker(mrA, mrB);
}
