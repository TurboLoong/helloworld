import Shape from './Shape';
import expandData from '../json/locals1.json';
import { getPixel, isInContainer } from './utils';

export default class painter {
  constructor(map, zr, storage) {
    this._map = map;
    this._zr = zr;
    this._storage = storage;
    this.shape = new Shape();
    const offset = 150;
    this.groupCenter = { x: this._zr.getWidth() - offset, y: this._zr.getHeight() - offset, r: 100 };
    this.container = { width: this._zr.getWidth(), height: this._zr.getHeight() };
  }

  drawLocals() {
    // 如果有经纬度
    const localsMap = this._storage.getLocalsMapDisplay();
    localsMap.forEach((value) => {
      const pixel = getPixel(value.lngLat, this._map);
      this.drawImage(value, pixel);
    });
    // 如果没有经纬度
    // let notLocalsMap = this._storage.getNotLocalsMap();
    // notLocalsMap.forEach((value) => {
    //     this.drawImage(value, value.pixel);
    // });
  }

  drawImage(opts, pixel) {
    const pixelTempl = pixel;
    pixelTempl.type = opts.type || 'normal';
    // 如果在容器中
    if (isInContainer(pixel, this.container)) {
      const image = this.shape.initImage(pixel);
      image.on('click', () => {
        const locals = expandData.data;
        this._storage.addGoup('7d75cab1d58d441e8beeb71353488b8e', locals);
        this.paint();
      });
      image.on('contextmenu', () => {
        this._storage.deleteGroup('7d75cab1d58d441e8beeb71353488b8e');
        this.paint();
      });
      this._zr.add(image);
    }
  }

  drawLine({ start, end }) {
    if (start.lngLat && end.lngLat) {
      const startPix = getPixel(start.lngLat, this._map);
      const endPix = getPixel(end.lngLat, this._map);
      if (isInContainer(startPix, this.container) && isInContainer(endPix, this.container)) {
        this._zr.add(this.shape.initLine(startPix, endPix));
      }
    }
  }

  drawLines() {
    const linesMap = this._storage.getLinesMap();
    linesMap.forEach((v) => {
      if (v && v.start) {
        this.drawLine(
          v,
        );
      }
    });
  }

  setFitView() {
    const localsMap = this._storage.getLocalsMapDisplay();
    localsMap.forEach((v) => {
      new AMap.Marker({
        map: this._map,
        icon: '',
        position: v.lngLat,
        offset: new AMap.Pixel(-12, -36),
      });
    });
    this._map.setFitView();
    this._map.clearMap();
  }

  paint() {
    this._zr.clear();
    this.drawLocals();
    this.drawLines();
    // this.drawGroup();
  }
}
