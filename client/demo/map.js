import { Image } from '../lib/zrender/export';
import { init } from '../lib/zrender/zrender';
import normal from '../image/normal.png';

let zr = init(document.getElementById('container'));
zr.add(new Image({
    style: {
        image: normal,
        x: 200 - 15,
        y: 200 - 15,
        width: 20,
        height: 20
    },
    z: 2
}));

mapReady();
function mapReady() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
        var map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 11,
            center: [116.397428, 39.90923],
            animateEnable: false
        });
        map.on('complete', function() {
            AMap.event.addDomListener(document.getElementById('container'), 'mousewheel', function(e) {
                if (e.zrDelta > 0) {
                    map.zoomIn();
                } else {
                    map.zoomOut();
                }
            }, false);
            var dragging = false;
            var x, y;
            AMap.event.addDomListener(document.getElementById('container'), 'mousedown', function(e) {
                dragging = true;
                x = e.x;
                y = e.y;
            });
            AMap.event.addDomListener(document.getElementById('container'), 'mousemove', function(e) {
                if (dragging) {
                    map.panBy(e.x - x, e.y - y);
                    x = e.x; y = e.y;
                }
            });
            AMap.event.addDomListener(document.getElementById('container'), 'mouseup', function(e) {
               dragging = false;
            });
        });
    };
    script.src = 'http://webapi.amap.com/maps?v=1.4.3&key=37155424cd7fa4ef99e8fd6d7835a908';
    document.head.appendChild(script);
}

function debounce(fn, wait, immediate) {
    var timeout,
        args,
        context,
        timestamp,
        result;

    var later = function() {
        var last = new Date().getTime() - timestamp;

        if(last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if(!immediate) {
                result = fn.apply(context, args);

                if(!timeout) {
                    context = args = null;
                }
            }
        }
    };

    return function() {
        context = this;
        args = arguments;
        timestamp = new Date().getTime();
        var callNow = immediate && !timeout;

        if(!timeout) {
            timeout = setTimeout(later, wait);
        }

        if(callNow) {
            result = fn.apply(context, args);
            context = args = null;
        }

        return result;
    }
};