var margin2 = {top: 50, right: 30, bottom: 30, left: 60} ;
var width2 = 460 - margin2.left - margin2.right ;
var height2 = 400 - margin2.top - margin2.bottom ;

var svg2 = d3.select("#graph2")
  .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");
  
  var graph2= function(data) {

   
    var x2 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width2 ]);
    svg2.append("g")
      .attr("transform", "translate(0," + height2 + ")")
      .call(d3.axisBottom(x2));

    
    var y2 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height2, 0 ]);
    svg2.append("g")
      .call(d3.axisLeft(y2));

   
    svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x2(parseInt(d.Year)) })
        .y(function(d) { return y2(parseInt(d.young)) })
        )
      svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x2(parseInt(d.Year)) })
        .y(function(d) { return y2(parseInt(d.middle)) })
        )
      svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x2(parseInt(d.Year)) })
        .y(function(d) { return y2(parseInt(d.adult)) })
        )
      svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x2(parseInt(d.Year)) })
        .y(function(d) { return y2(parseInt(d.old)) })
        )
       
      svg2.append("text")
      .attr("class", "x2 label")
      .attr("text-anchor", "middle")
      .attr("x", width2)
      .attr("y", height2 -10)
      .text("Year")
      
      svg2.append("text")
      .attr("class", "y2 label")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("text-anchor", "middle")
      .attr("transform", "translate(30,50)")
      .attr("transform", "rotate(-90)")
      .text("Percentage")
      

}
var graph2Promise = d3.csv("../Data/age.csv")
var successFCN2 = function(data)
{
    console.log(data);
    graph2(data);
}
var failFCN2 = function(error)
{
    console.log("error",error);
}


graph2Promise.then(successFCN2,failFCN2); 


