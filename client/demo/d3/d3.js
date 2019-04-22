/**
 * !: 
 * ?: 
 * todo:  
 * //: jkfdf
 */
import pie from './pie';
import line from './line';
import * as d3 from '../../lib/d3.v5.min';
var width = 600;
var height = 600;
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
// pie(d3, svg);
line(d3, svg);
// var xAxisWidth = 300;
// var yAxisWidth = 300;
// var lines = [[80, 80], [200, 100], [200, 200], [100, 200]];
// var lines = [80, 120, 160, 200, 240, 280];
// var linePath = d3.line()
//     .x(function (d) {
//         return d;
//     })
//     .y(function (d, i) {
//         return i % 2 === 0 ? 40 : 120;
//     })
//     .defined(function (d) {
//         return d < 200;
//     });

// 散点图
/* var center = [
    [0.5, 0.5], [0.7, 0.8], [0.4, 0.9],
    [0.11, 0.32], [0.88, 0.25], [0.75, 0.12],
    [0.5, 0.1], [0.2, 0.3], [0.4, 0.1], [0.6, 0.7]
];

var xScale = d3.scaleLinear()
    .domain([0, 1.2 * d3.max(center, function (d) {
        return d[0];
    })])
    .range([0, xAxisWidth]);

var yScale = d3.scaleLinear()
    .domain([0, 1.2 * d3.max(center, function (d) {
        return d[1];
    })])
    .range([yAxisWidth, 0]);

var padding = { top: 30, right: 30, bottom: 30, left: 30 };
// 画坐标轴
// x轴
var xAxis = d3.axisBottom().scale(xScale);

// y轴
var yAxis = d3.axisLeft().scale(yScale);
svg
    .append('g')
    .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
    .call(xAxis);

svg
    .append('g')
    .attr('transform', 'translate(' + padding.left + ',' + (height - yAxisWidth - padding.bottom) + ')')
    .call(yAxis);

var circle = svg.selectAll('circle')
    .data(center)
    .enter()
    .append('circle')
    .attr('fill', 'black')
    .attr('cx', function (d) {
        return padding.left + xScale(d[0]);
    })
    .attr('cy', function (d) {
        return yScale(d[1]) - padding.bottom + yAxisWidth;
    })
    .attr('r', 5);
    */
