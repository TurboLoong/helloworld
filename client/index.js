/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */
import zrender from 'zrender';
var zr = zrender.init(document.getElementById('main'));
zr.clear();

function render(r, n, count) {
    let m = 1;
    for (var i = 0; i < n; i++) {
        m++;
        zr.add(new zrender.Circle({
            shape: {
                cx: 250 + r * Math.cos(2*Math.PI*(i) / n).toFixed(2),
                cy: 250 + r * Math.sin(2*Math.PI*(i) / n).toFixed(2),
                r: 5
            },
            style: {
                fill: 'none',
                stroke: '#F00'
            }
        }));

        if(count == m){
            break;
        }
    }
}
let defaultR = 60, defaultCount = 12, d = 20;
let count = 0;
let m = 0; //第几圈
const total = 317;
let currentR = defaultR, currentCount = defaultCount;
let lastCount = 0;
while (count < total)
{
    lastCount = count;
    let leftCount = total - lastCount;
    render(currentR, currentCount, leftCount);
    currentR = defaultR + m * d;
    currentCount = defaultCount*currentR/defaultR;
    m++;
    count += currentCount;
}










