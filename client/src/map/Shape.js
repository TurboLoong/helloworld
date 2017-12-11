import normal from '../../image/normal.png';
import expand from '../../image/expand.png';
import risk from '../../image/risk.png';
import zrender from 'zrender';
export default class Shape {
    initLine(start, end) {
        let line = new zrender.Line({
            shape: {
                x1: start.x,
                y1: start.y,
                x2: end.x,
                y2: end.y
            }
        });
        return line;
    }

    initImage(opts) {
        const images = { normal, expand, risk };
        const offset = 15;

        let image = new zrender.Image({
            style: {
                image: images[opts.type],
                x: opts.x - offset,
                y: opts.y - offset,
                width: 20,
                height: 20
            }

        });
        return image;
    }
}