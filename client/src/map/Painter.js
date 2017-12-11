import Shape from './Shape';
import expandData from '../../json/locals1.json';
export default class painter {
    constructor(map, zr, storage) {
        this._map = map;
        this._zr = zr;
        this._storage = storage;
        this.shape = new Shape();
    }

    getPixel(local) {
        const lngLat = new AMap.LngLat(...local);
        return this._map.lngLatToContainer(lngLat);
    }

    drawLocals() {
        let localsMap = this._storage.getLocalsMap();
        localsMap.forEach((value) => {
            this.drawImage(value);
        });
    }

    drawImage(opts) {
        let pixel = this.getPixel(opts.lngLat);
        pixel.type = opts.type || 'normal';
        let image = this.shape.initImage(pixel);
        image.on('click', () => {
            let locals = expandData.data;
            this._storage.addGoup('7d75cab1d58d441e8beeb71353488b8e', locals);
            this.paint();
        });
        image.on('contextmenu', () => {
            this._storage.deleteGroup('7d75cab1d58d441e8beeb71353488b8e');
            this.paint();
        });

        this._zr.add(image);
    }

    drawLine({ start, end }) {
        if (start.lngLat && end.lngLat) {
            let startPix = this.getPixel(start.lngLat);
            let endPix = this.getPixel(end.lngLat);
            this._zr.add(this.shape.initLine(startPix, endPix));
        }
    }

    drawLines() {
        let linesMap = this._storage.getLinesMap();
        linesMap.forEach(v => {
            if (v && v.start) {
                this.drawLine(
                    v
                );
            }
        });
    }

    paint() {
        this._zr.clear();
        this.drawLocals();
        this.drawLines();
        this._map.setFitView();
    }
}