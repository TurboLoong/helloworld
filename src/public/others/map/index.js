import Area from './lib/index';
import data from './json/locals.json';

const locals = data.data;

const mapContent = 'container';
const area = new Area(mapContent);
setTimeout(() => {
  area.add('bc3e060bf3d94692a29bc9c6ecc363f2', locals);
}, 2000);
