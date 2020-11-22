

var margin1 = {top: 50, right: 30, bottom: 30, left: 60} ;
var width1 = 460 - margin1.left - margin1.right ;
var height1 = 400 - margin1.top - margin1.bottom ;

var svg1 = d3.select("#graph1")
  .append("svg")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", height1 + margin1.top + margin1.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin1.left + "," + margin1.top + ")");
  
  var graph1= function(data) {

   
    var x1 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width1 ]);
    svg1.append("g")
      .attr("transform", "translate(0," + height1 + ")")
      .call(d3.axisBottom(x1));

    
    var y1 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height1, 0 ]);
    svg1.append("g")
      .call(d3.axisLeft(y1));

   
    svg1.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x1(parseInt(d.Year)) })
        .y(function(d) { return y1(parseInt(d.US_Adults)) })
        )

      svg1.append("text")
      .attr("class", "x1 label")
      .attr("text-anchor", "middle")
      .attr("x", width1)
      .attr("y", height1 -10)
      .text("Year")
      
      svg1.append("text")
      .attr("class", "y1 label")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Percentage")
      
      
}
var graph1Promise = d3.csv("../data/overtime.csv")
var successFCN1 = function(data)
{
    console.log(data);
    graph1(data);
}
var failFCN1 = function(error)
{
    console.log("error",error);
}


graph1Promise.then(successFCN1,failFCN1); 


