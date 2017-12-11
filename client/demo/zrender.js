import {init} from '../lib/zrender/zrender';
import {Circle} from '../lib/zrender/export';
var zr = init(document.getElementById('container'));

var circle1 = new Circle({
    shape: {
        cx: 100,
        cy: 100,
        r: 30
    },
    style: {
        fill: 'blue'
    },
    draggable: true
});

zr.add(circle1);
zr.on('click', function(e) {
    console.log(e);
});