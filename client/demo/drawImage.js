import rect from '../image/rect.svg';
var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

var img = new Image();
img.src = rect;
img.onload = function() {
    ctx.drawImage(img, 0, 0);
}
