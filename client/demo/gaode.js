let container = createDOM('may-layer',{ width: 500, height: 500});
document.body.appendChild(container);
var script = document.createElement('script');
script.type = 'text/javascript';
let proxy;
script.onload = () => {

};
script.src = '//webapi.amap.com/maps?v=1.4.3&key=37155424cd7fa4ef99e8fd6d7835a908&plugin=AMap.Geocoder&callback=init';
container.appendChild(script);
window.init = function() {
    proxy = new AMap.Map(container.id, {
        zoom: 11,
        resizeEnable: true,
        center: [116.397428, 39.90923],
        mapStyle: 'amap://styles/whitesmoke',
        animateEnable: false
    });
}

function createDOM(id, options = {}) {
    var {
        zIndex = 0,
        position = 'absolute',
        width,
        height
    } = options;

    var dom = document.createElement('div');
    dom.id = id;

    var style = dom.style;
    style.zIndex = zIndex;
    style.position = position;
    style.top = 0;
    style.right = 0;
    style.bottom = 0;
    style.left = 0;
    style.width = width + 'px';
    style.height = height + 'px';
    style['-webkit-user-select'] = 'none';
    style['user-select'] = 'none';
    style['-webkit-touch-callout'] = 'none';
    style['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
    style['padding'] = 0;
    style['margin'] = 0;
    style['border-width'] = 0;
    return dom;
}