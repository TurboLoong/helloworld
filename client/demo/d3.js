import * as d3 from 'd3';
var width = 600;
var height = 600;
var svg = d3
	.select('body')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

// 画柱状图
var padding = { top: 20, right: 20, bottom: 20, left: 20 };
var rectStep = 35;
var rectWidth = 30;
var dataset = [50, 43, 120, 87, 99, 167, 142];

var xAxisWidth = 300;
var yAxisWidth = 300;

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
	.attr('x', function(d, i) {
    return padding.left + xScale(i) + 5;
})
	.attr('y', function(d, i) {
    return  yScale(d) - padding.bottom + yAxisWidth;
})
	.attr('width', xScale.bandwidth() - 10)
	.attr('height', function(d) {
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
	.attr('x', function(d, i) {
    return padding.left + xScale(i) + 5;
})
	.attr('y', function(d, i) {
    return yScale(d) - padding.bottom + yAxisWidth;
})
	.attr('dx', (xScale.bandwidth() - 10) / 2)
	.attr('dy', '1em')
	.text(function(d) {
    return d;
});

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