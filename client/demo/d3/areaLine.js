export default function areaLine(d3, svg) {
  var width = 600;
  var height = 600;

  var margin = { top: 20, right: 20, bottom: 30, left: 30 };
  d3.csv('/dist/aapl.csv', d3.autoType).then(function (data) {
    data = Object.assign(data, { y: '$ Close' })
    var xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([margin.left, width - margin.right]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.close)]).nice()
      .range([height - margin.bottom, margin.top]);

    var xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);

    // y轴
    var yAxis = d3.axisLeft(yScale);
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .call(yAxis)
      .call(g => g.select('.tick:last-of-type text').clone().attr('x', 3).attr('text-anchor', 'start').attr('font-weight', 'bold').text(data.y));

    var area = d3.area()
      .x(d => xScale(d.date))
      .y0(yScale(0))
      .y(d => yScale(d.close));

    // 添加路径
    svg.append('path')
      .attr('transform', `translate(0,${margin.bottom})`)
      .datum(data)
      .attr('fill', 'steelblue')
      .attr('d', area);
  })

}