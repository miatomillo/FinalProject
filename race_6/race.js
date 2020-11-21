var margin6 = {top: 10, right: 30, bottom: 30, left: 60} ;
var width6 = 460 - margin.left - margin.right ;
var height6 = 400 - margin.top - margin.bottom ;

var svg6 = d3.select("#graph6")
  .append("svg")
    .attr("width6", width + margin.left + margin.right)
    .attr("height6", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  var graph6= function(data) {

   
    var x6 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    
    var y6 = d3.scaleLinear()
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
        .y(function(d) { return y(parseInt(d.White)) })
        )
      
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.Black)) })
        )
      
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.Hispanic)) })
        )

}
var graph6Promise = d3.csv("../data/race.csv")
var successFCN6 = function(data)
{
    console.log(data);
    graph6 (data);
}
var failFCN6 = function(error)
{
    console.log("error",error);
}


graph6Promise.then(successFCN,failFCN); 


