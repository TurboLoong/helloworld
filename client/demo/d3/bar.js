export default function bar(d3, svg) {
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
}