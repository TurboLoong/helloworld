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
    var x, y;
    for(var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if(a[i][j] == '.'){
                var sum = 0;
                x = i; y = j;
                while (a[x][y] != '#'){
                    if(a[x][y] == 'G'){
                        sum++;
                    }
                }
            }
        }
    }
}