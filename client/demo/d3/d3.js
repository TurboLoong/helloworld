/**
 * !: 
 * ?: 
 * todo:  
 * //: jkfdf
 */
import bar from './bar';
// import pie from './pie';
// import line from './line';
import areaLine from './areaLine';
// import pack from './pack';
// import tree from './tree';
// import cluster from './cluster';
// import './d3_hierarchy';
// import treemap from './treemap';
import * as d3 from '../../lib/d3.v5.min';
var width = 900;
var height = 900;
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
bar(d3, svg);
// pack(d3, svg);
// pie(d3, svg);
// areaLine(d3, svg);
// cluster(d3);
// tree(d3);
// treemap(d3, svg);
