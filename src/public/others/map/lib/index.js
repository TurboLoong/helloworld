import { init } from '@/public/lib/zrender/zrender';
import Storage from './Storage';
import Painter from './Painter';

export default class Area {
  constructor(container) {
    this.initMap(container);
  }

  initMap(container) {
    const center = [116.40, 39.91];
    const map = new AMap.Map(container, {
      resizeEnable: true,
      zoom: 14,
      center,
      features: ['bg', 'point'],
      mapStyle: 'amap://styles/darkblue',
    });
    this.map = map;
    this.initChart();
    this.mapEvent();
  }

  initChart() {
    this.map.on('complete', () => {
      const zrenderApp = document.getElementsByClassName('amap-layers')[0];
      this.zr = init(zrenderApp);
      zrenderApp.firstChild.style.zIndex = 115;
      const storage = new Storage();
      this.storage = storage;
      this.painter = new Painter(this.map, this.zr, storage);
      this.storage.setPainter(this.painter);
    });
  }

  mapEvent() {
    this.map.on('movestart', () => {
      this.zr.clear();
    });
    this.map.on('moveend', () => {
      this.painter.paint();
    });
  }

  add(companyId, data) {
    this.storage.addGoup(companyId, data);
  }

  refresh() {
    this.painter.paint();
    this.painter.setFitView();
  }
}
