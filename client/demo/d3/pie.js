export default function pie(d3, svg) {
    var dataset = [
        { startAngle: 0, endAngle: Math.PI * 0.6 },
        { startAngle: Math.PI * 0.6, endAngle: Math.PI },
        { startAngle: Math.PI, endAngle: Math.PI * 1.7 },
        { startAngle: Math.PI * 1.7, endAngle: Math.PI * 2 }
    ];
    var arcPath = d3.arc()
        .innerRadius(0)
        .outerRadius(100);
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    // 添加路径
    svg.selectAll('path')
        .data(dataset)
        .enter()
        .append('path')
        .attr('d', function (d) {
            return arcPath(d);
        })
        .attr('transform', 'translate(250, 250)')
        .attr('stroke', 'black')
        .attr('stroke-width', '3px')
        .attr('fill', function (d, i) {
            return color(i);
        });
}
