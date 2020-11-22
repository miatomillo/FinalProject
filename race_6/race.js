var margin6 = {top: 50, right: 30, bottom: 30, left: 60} ;
var width6 = 460 - margin6.left - margin6.right ;
var height6 = 400 - margin6.top - margin6.bottom ;

var svg6 = d3.select("#graph6")
  .append("svg")
    .attr("width", width6 + margin6.left + margin6.right)
    .attr("height", height6 + margin6.top + margin6.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin6.left + "," + margin6.top + ")");
  

    
  var graph6= function(data) {

   
    var x6 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width6 ]);
    svg6.append("g")
      .attr("transform", "translate(0," + height6 + ")")
      .call(d3.axisBottom(x6));

    
    var y6 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height6, 0 ]);
    svg6.append("g")
      .call(d3.axisLeft(y6));
      
      
      
   
    svg6.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x6(parseInt(d.Year)) })
        .y(function(d) { return y6(parseInt(d.White)) })
        )
      
      svg6.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x6(parseInt(d.Year)) })
        .y(function(d) { return y6(parseInt(d.Black)) })
        )
      
      svg6.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x6(parseInt(d.Year)) })
        .y(function(d) { return y6(parseInt(d.Hispanic)) })
        )
      
      svg6.append("text")
      .attr("class", "x6 label")
      .attr("text-anchor", "middle")
      .attr("x", width6)
      .attr("y", height6 -10)
      .text("Year")
      
      svg6.append("text")
      .attr("class", "y6 label")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Percentage")
      
      

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


graph6Promise.then(successFCN6,failFCN6); 


