var margin = {top: 10, right: 30, bottom: 30, left: 60} ;
var width = 460 - margin.left - margin.right ;
var height = 400 - margin.top - margin.bottom ;

var svg = d3.select("#graph2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  var graph2= function(data) {

   
    var x = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    
    var y = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

   
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.young)) })
        )
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.middle)) })
        )
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.adult)) })
        )
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.old)) })
        )
       
      

}
var graph2Promise = d3.csv("../data/age.csv")
var successFCN = function(data)
{
    console.log(data);
    graph2(data);
}
var failFCN = function(error)
{
    console.log("error",error);
}


graph2Promise.then(successFCN,failFCN); 

