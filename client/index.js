/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */
import zrender from 'zrender';
var zr = zrender.init(document.getElementById('main'));
zr.clear();
for (var i = 1; i < 7; i++) {
    zr.add(new zrender.Circle({
        shape: {
            cx: 250 + 50 * Math.cos(2*Math.PI*(i - 1) / 6).toFixed(2),
            cy: 250 + 50 * Math.sin(2*Math.PI*(i - 1) / 6).toFixed(2),
            r: 5
        },
        style: {
            fill: 'none',
            stroke: '#F00'
        }
    }));
}

for (var i = 1; i < 13; i++) {
    zr.add(new zrender.Circle({
        shape: {
            cx: 250 + 80 * Math.cos(2*Math.PI*(i - 1) / 12).toFixed(2),
            cy: 250 + 80 * Math.sin(2*Math.PI*(i - 1) / 12).toFixed(2),
            r: 5
        },
        style: {
            fill: 'none',
            stroke: '#F00'
        }
    }));
}