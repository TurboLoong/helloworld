/**
 * author: TurboLoong
 * date: 2016/10/29
 * descriptioin:
 */
/**
 *@author: TurboLoong
 *@date: 2016/10/29
 *@param: use strict
 *@des: 炸弹人游戏
 */
function rebelBombermanGame(){
    var a = [12][12];
    var x, y, p, q;
    for(var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if(a[i][j] == '.'){
                var sum = 0;
                x = i; y = j;
                //向上统计可以消灭的敌人数
                while (a[x][y] != '#'){
                    if(a[x][y] == 'G'){
                        sum++;
                    }
                    //继续向上
                    x--;
                }
                //想下统计可以消灭的敌人数
                x = i; y = j;
                while (a[x][y]!='#'){
                    if(a[x][y]=='G'){
                        sum++;
                    }
                    x++;
                }
                //想左统计可以消灭的敌人数
                x = i; y = j;
                while (a[x][y]!='#'){
                    if(a[x][y]=='G'){
                        sum++;
                    }
                    y++;
                }
                //想右统计可以消灭的敌人数
                x = i; y = j;
                while (a[x][y]!='#'){
                    if(a[x][y]=='G'){
                        sum++;
                    }
                    y--;
                }

                if(sum > map){
                    //如果当前点所能消灭的敌人总数大于map，则更新map
                    map = sum;
                    //并用p和q记录当前点的坐标
                    p = i;
                    q = j
                }
            }
        }
    }
}

/**
 *@author: TurboLoong
 *@date: 2016/11/6
 *@param: x
 *@des:火柴棍游戏
 */
function calculateMatch(x) {
    var num = 0;
    var f = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]; //0-9每个数字用的火柴根数
    while (parseInt(x/10) != 0){ //如果x/10不等于0， 则说明这个数至少有两位
        //获得x的末尾数字并将此数需要用到的火柴棍累加到Num中
        num +=f[x%10];
        x = parseInt(x/10);
    }
    num += f[x]; //最后加上此时x所需要用到的火柴棍的根数
    return num;
}

function playMatch(m) {
    var a, b, c, sum = 0;
    for(a = 0; a <= 1111; a++){
        for(b = 0; b <= 1111; b++){
            c = a+b;
            if(calculateMatch(a) + calculateMatch(b) + calculateMatch(c) == m-4){
                console.log('a----' + a + '; b-----' + b + '; c-------' + c);
                sum++;
            }
        }
    }
    console.log(sum);
}
//playMatch(18);
var total = 0;
var a= new Array(10);
var book = {};
//当前桌面上的牌出现的次数，0表示没出现过，1表示已经出现
for(var i = 0; i < 10; i++){
    book[i] = 0;
}

function dfs(step) {
    if(step == 10){
        if(a[0]*100 + a[2]*10 + a[3] + a[4]*100 + a[5]*10 + a[6] == a[7]*100 + a[8]*10 + a[9]){
            total++;
            console.log(a[0] + '----' + a[1] + '----'+ a[2] + '----'+ a[3] + '----'+ a[4] + '----'+ a[5] + '----'+ a[6] + '----'+ a[7] + '----'+ a[8] + '----'+ a[9] + '----')
        }
        return;
    }
    for(var i = 0; i < 9; i++){
        if(book[i] == 0){
            a[step] = i;
            book[i] = 1;
            dfs(step+1);
            book[i] = 0;
        }
    }
    return;
}
dfs(0);

