import Storage from './Storage';
import Painter from './Painter';
import zrender from 'zrender';
export default class Area {
    constructor(container) {
        this.initMap(container);
    }

    initMap(container) {
        const center = [116.40, 39.91];
        const map = new AMap.Map(container, {
            resizeEnable: true,
            zoom: 14,
            center: center
        });
        this.map = map;
        let zrenderApp = document.getElementsByClassName('amap-layers')[0];
        this.initChart(zrenderApp);
        this.mapEvent();
        var storage = new Storage();
        this.storage = storage;
        this.painter = new Painter(map, this.zr, storage);
    }

    initChart(container) {
        this.zr = zrender.init(container);
        container.firstChild.style.zIndex = 115;
    }

    mapEvent() {
        this.map.on('movestart', (clickEvent = window.event) => {
            this.zr.clear();
        });
        this.map.on('moveend', (clickEvent = window.event) => {
            this.painter.paint();
        });
    }

    add(companyId, data) {
        this.storage.addGoup(companyId, data);
    }

    setFitView() {
        let localsMap = this.storage.getLocalsMap();
        localsMap.forEach((v) => {
            new AMap.Marker({
                map: this.map,
                icon: '',
                position: v.lngLat,
                offset: new AMap.Pixel(-12, -36)
            });
        });
        this.map.setFitView();
        this.map.clearMap();
    }

    refresh() {
        this.painter.paint();
    }
}