import rect from '../image/rect.svg';
import zrender from 'zrender';
var zr = zrender.init(document.getElementById('container'));

var img = new Image();
img.src = rect;
var image = new zrender.Image({
    style: {
        image: rect,
        x: 0,
        y: 0,
        width: 200,
        height: 200
    }
});
zr.add(image);
// img.onload = function() {
//
// }
