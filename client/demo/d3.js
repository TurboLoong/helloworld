import * as d3 from "d3";
var width = 400;
var height = 400;
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
var padding = { top: 20, right: 20, bottom: 20, left: 20 };
var rectStep = 35;
var rectWidth = 30;
var dataset = [50, 43, 120, 87, 99, 167, 142];
var rect = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("fill", "steelblue")
  .attr("x", function(d, i) {
    return padding.left + i * rectStep;
  })
  .attr("y", function(d, i) {
    return height - padding.bottom - d;
  })
  .attr("width", rectWidth)
  .attr("height", function(d) {
    return d;
  });

var text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("fill", "white")
  .attr("font-size", "14px")
  .attr("text-anchor", "middle")
  .attr("x", function(d, i) {
    return padding.left + i * rectStep;
  })
  .attr("y", function(d, i) {
    return height - padding.bottom - d;
  })
  .attr("dx", rectWidth / 2)
  .attr("dy", "1em")
  .text(function(d) {
    return d;
  });

function draw() {
  var updateRect = svg.selectAll("rect").data(dataset);

  //获取矩形的enter部分
  var enterRect = updateRect.enter();
  // 获取 矩形的exit部分
  var exitRect = updateRect.exit();

  //1. 矩形update的处理方法
  updateRect
    .attr("fill", "steelblue")
    .attr("x", function(d, i) {
      return padding.left + i * rectStep;
    })
    .attr("y", function(d) {
      return height - padding.bottom - d;
    })
    .attr("width", rectWidth)
    .attr("height", function(d) {
      return d;
    });
  //2. 矩形enter的处理方法
  enterRect
    .append("rect")
    .attr("fill", "steelblue")
    .attr("x", function(d, i) {
      return padding.left + i * rectStep;
    })
    .attr("y", function(d) {
      return height - padding.bottom - d;
    })
    .attr("width", rectWidth)
    .attr("height", function(d) {
      return d;
    });

  //3. 矩形exit的处理方法
  exitRect.remove();
  // 获取文字的update部分
  var updateText = svg.selectAll("text").data(dataset);
  // 获取文字的enter部分
  var enterText = updateText.enter();
  // 获取文字的exit部分
  var exitText = updataText.exit();

  //1. 文字update的处理方法

  //2. 文字enter的处理方法

  //3. 文字exit的处理方法
}

// document.getElementById('ascendBtn').onclick = mysort;
// function mysort(){
//   dataset.sort(d3.ascending);
//   draw();
// }

// document.getElementById('addBtn').onclick = myadd;
// function myadd(){
//   dataset.push( Math.floor(Math.random()*100));
//   draw();
// }

var quantize = d3.scale.quantize()
  .domain([50, 0])
  .range(["#888", "#666", "#444", "#222", "#000"]);

var r = [45, 35, 25, 15, 5];

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

svg
  .selectAll("circle")
  .data(r)
  .enter()
  .append("circle")
  .attr("cx", function(d, i) {
    return 50 + i * 30;
  })
  .attr("cy", 50)
  .attr("r", function(d) {
    return d;
  })
  .attr("fill", function(d) {
    return quantize(d);
  });
