var margin = {top: 50, right: 20, bottom:100, left: 70},
    width = 1800 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var formatPercent = d3.format(".2n");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .3);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Magnitudine:</strong> <span style='color:red'>" + d.Magnitudine + "</span>";
  })
  
  

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);


d3.tsv("data2.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.Data; }));
  y.domain([0, d3.max(data, function(d) { return d.Magnitudine; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
	  .style("font-size", "15px")
      .call(xAxis);
	  

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".91em")
      .style("text-anchor", "end")
	  .style("font-size", "20px")
      .text("Magnitudine");
	  

  svg.selectAll(".bar")
      .data(data)
	  .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Data); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.Magnitudine); })
      .attr("height", function(d) { return height - y(d.Magnitudine); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});

function type(d) {
  d.Magnitudine = +d.Magnitudine;
  return d;
}

