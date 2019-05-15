export default function bar(d3, svg) {
  // 画柱状图
  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // set the ranges
  var xScale = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
  var yScale = d3.scaleLinear()
    .range([height, 0]);

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  // get the data
  d3.csv("/dist/sales.csv").then(function (data) {

    // format the data
    data.forEach(function (d) {
      d.sales = +d.sales;
    });

    // Scale the range of the data in the domains
    xScale.domain(data.map(function (d) { return d.salesperson; }));
    yScale.domain([0, d3.max(data, function (d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr('transform', 'translate(20, 0)')
      .attr("fill", "steelblue")
      .attr("x", function (d) { return xScale(d.salesperson); })
      .attr("width", xScale.bandwidth())
      .attr("y", function (d) { return yScale(d.sales); })
      .attr("height", function (d) { return height - yScale(d.sales); });

    // add the x Axis
    svg.append("g")
      .attr("transform", "translate(20," + height + ")")
      .call(d3.axisBottom(xScale));

    // add the y Axis
    svg.append("g")
      .attr('transform', 'translate(20,0)')
      .call(d3.axisLeft(yScale));

  });
}