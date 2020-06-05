import {
  Line, Image, Group, Circle,
} from '@/public/lib/zrender/export';
import normal from '../image/normal.png';
import expand from '../image/expand.png';
import risk from '../image/risk.png';

export default class Shape {
  static initLine(start, end) {
    const line = new Line({
      shape: {
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y,
      },
      style: {
        lineWidth: 1,
        stroke: '#ffffff',
      },
      z: 1,
    });
    return line;
  }

  static initImage(opts) {
    const images = { normal, expand, risk };
    const offset = 15;
    const image = new Image({
      style: {
        image: images[opts.type],
        x: opts.x - offset,
        y: opts.y - offset,
        width: 20,
        height: 20,
      },
      z: 2,
    });
    return image;
  }

  static initGroup(center) {
    const g = new Group();
    g.position[0] = center.x;
    g.position[1] = center.y;
    g.add(new Circle({
      style: {
        stroke: 'red',
        fill: 'transparent',
      },
      shape: {
        r: center.r,
      },
      z: 3,
    }));
    return g;
  }
}
