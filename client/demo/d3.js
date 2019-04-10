/**
 * !: 
 * ?: 
 * todo:  
 * //: jkfdf
 */
import * as d3 from '../lib/d3.v3.min';
var width = 600;
var height = 600;
var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

var xAxisWidth = 300;
var yAxisWidth = 300;
var lines = [[80, 80], [200, 100], [200, 200], [100, 200]];
var linePath = d3.line();
// 添加路径
svg.append('path')
    .attr('d', linePath(lines))
    .attr('stroke', 'black')
    .attr('stroke-width', '3px')
    .attr('fill', 'none');
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
    .attr('r', 5); */

// 画柱状图
/*
var padding = { top: 20, right: 20, bottom: 20, left: 20 };
var rectStep = 35;
var rectWidth = 30;
var dataset = [50, 43, 120, 87, 99, 167, 142];
var xScale = d3
    .scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([0, xAxisWidth], 0.2);

var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([yAxisWidth, 0]);

var rect = svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('fill', 'steelblue')
    .attr('x', function (d, i) {
        return padding.left + xScale(i) + 5;
    })
    .attr('y', function (d, i) {
        return yScale(d) - padding.bottom + yAxisWidth;
    })
    .attr('width', xScale.bandwidth() - 10)
    .attr('height', function (d) {
        return yAxisWidth - yScale(d);
    });

var text = svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('fill', 'white')
    .attr('font-size', '14px')
    .attr('text-anchor', 'middle')
    .attr('x', function (d, i) {
        return padding.left + xScale(i) + 5;
    })
    .attr('y', function (d, i) {
        return yScale(d) - padding.bottom + yAxisWidth;
    })
    .attr('dx', (xScale.bandwidth() - 10) / 2)
    .attr('dy', '1em')
    .text(function (d) {
        return d;
    });
 */