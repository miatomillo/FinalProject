var margin5 = {top: 50, right: 30, bottom: 30, left: 60} ;
var width5 = 460 - margin5.left - margin5.right ;
var height5 = 400 - margin5.top - margin5.bottom ;

var svg5 = d3.select("#graph5")
  .append("svg")
    .attr("width", width5 + margin5.left + margin5.right)
    .attr("height", height5 + margin5.top + margin5.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin5.left + "," + margin5.top + ")");
  
  var graph5= function(data) {

   
    var x5 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width5 ]);
    svg5.append("g")
      .attr("transform", "translate(0," + height5 + ")")
      .call(d3.axisBottom(x5));

    
    var y5 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height5, 0 ]);
    svg5.append("g")
      .call(d3.axisLeft(y5));

   
    svg5.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x5(parseInt(d.Year)) })
        .y(function(d) { return y5(parseInt(d.Less_than_$30000)) })
        )
    
      svg5.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x5(parseInt(d.Year)) })
        .y(function(d) { return y5(parseInt(d.$30000_$49999)) })
        )
      
       svg5.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x5(parseInt(d.Year)) })
        .y(function(d) { return y5(parseInt(d.$50000_$74999)) })
        )
      
      svg5.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x5(parseInt(d.Year)) })
        .y(function(d) { return y5(parseInt(d.$75000)) })
        )
      
      svg5.append("text")
      .attr("class", "x5 label")
      .attr("text-anchor", "middle")
      .attr("x", width5)
      .attr("y", height5 -10)
      .text("Year")
      
      svg5.append("text")
      .attr("class", "y5 label")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Percentage")
      
      

}
var graph5Promise = d3.csv("../Data/income.csv")
var successFCN5 = function(data)
{
    console.log(data);
    graph5(data);
}
var failFCN5 = function(error)
{
    console.log("error",error);
}


graph5Promise.then(successFCN5,failFCN5); 


