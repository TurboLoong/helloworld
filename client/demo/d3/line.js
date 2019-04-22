export default function line(d3, svg) {
    var width = 600;
    var height = 600;

    var dataset = [
        {
            country: 'china',
            gdp: [[2000, 11920], [2001, 13170], [2002, 14550],
            [2003, 16500], [2004, 19440], [2005, 22870],
            [2006, 27930], [2007, 35040], [2008, 45470],
            [2009, 51050], [2010, 59490], [2011, 73140],
            [2012, 83860], [2013, 103550]]
        },
        {
            country: 'japan',
            gdp: [[2000, 47310], [2001, 41590], [2002, 39800],
            [2003, 43020], [2004, 46550], [2005, 45710],
            [2006, 43560], [2007, 43560], [2008, 48490],
            [2009, 50350], [2010, 54950], [2011, 59050],
            [2012, 59370], [2013, 48980]]
        }
    ];

    var padding = { top: 50, right: 50, bottom: 50, left: 50 };
    var gdpmax = 0;
    for (var i = 0; i < dataset.length; i++) {
        var currGdp = d3.max(dataset[i].gdp, function (d) {
            return d[1];
        });
        if (currGdp > gdpmax) { gdpmax = currGdp; }
    }

    var xScale = d3.scaleLinear()
        .domain([2000, 2013])
        .range([0, width - padding.left - padding.right]);

    var yScale = d3.scaleLinear()
        .domain([0, gdpmax * 1.1])
        .range([height - padding.top - padding.bottom, 0]);

    var linePath = d3.line()
        .x(function (d) { return xScale(d[0]); })
        .y(function (d) { return yScale(d[1]); });

    var colors = [d3.rgb(0, 0, 255), d3.rgb(0, 255, 0)];

    // 添加路径
    svg.selectAll('path')
        .data(dataset)
        .enter()
        .append('path')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .attr('d', function (d) {
            return linePath(d.gdp);
        })
        .attr('fill', 'none')
        .attr('stroke-width', 3)
        .attr('stroke', function (d, i) {
            return colors[i];
        });
    var xAxis = d3.axisBottom().scale(xScale).ticks(5).tickFormat(d3.format('d'));

    // y轴
    var yAxis = d3.axisLeft().scale(yScale);
    svg
        .append('g')
        .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
        .call(xAxis);

    svg
        .append('g')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .call(yAxis);

}