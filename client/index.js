/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */
let deviceWidth = document.documentElement.offsetWidth;
deviceWidth = deviceWidth > 720 ? 720 : deviceWidth;
document.documentElement.style.fontSize = deviceWidth / 7.2 + 'px';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function render(r, n, count) {
    let m = 1;
    for (var i = 0; i < n; i++) {
        m++;
        draw(ctx, r, n, i);
        if(count == m){
            break;
        }
    }
}
let defaultR = 60, defaultCount = 12, d = 20;
let count = 0;
let m = 0; //第几圈
const total = 200;
let currentR = defaultR, currentCount = defaultCount;
let lastCount = 0;
ctx.translate(canvas.height/2, canvas.width/2);
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

function draw(ctx, radius, count, num) {
    var angle = num * 2 * Math.PI/count;
    ctx.rotate(angle);
    ctx.translate(0, -radius);
    ctx.rotate(-angle);
    drawCircle(ctx);
    ctx.rotate(angle);
    ctx.translate(0, radius);
    ctx.rotate(-angle);
}
function drawCircle(ctx) {
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI*2);
    ctx.fillStyle='#333';
    ctx.fill();
}










