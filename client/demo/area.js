import Area from '../src/map';
import data from '../json/locals.json';
const locals = data.data;

const mapContent = 'container';
let area = new Area(mapContent);

area.add('bc3e060bf3d94692a29bc9c6ecc363f2', locals);

area.refresh();
area.setFitView();