var margin5 = {top: 10, right: 30, bottom: 30, left: 60} ;
var width5 = 460 - margin.left - margin.right ;
var height5 = 400 - margin.top - margin.bottom ;

var svg5 = d3.select("#graph5")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  var graph5= function(data) {

   
    var x5 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x5));

    
    var y5 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y5));

   
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.Less_than_$30000)) })
        )
    
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.$30000_$49999)) })
        )
      
       svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.$50000_$74999)) })
        )
      
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.$75000)) })
        )
      

}
var graph5Promise = d3.csv("../data/income.csv")
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


