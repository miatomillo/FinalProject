var margin3 = {top: 10, right: 30, bottom: 30, left: 60} ;
var width3 = 460 - margin.left - margin.right ;
var height3 = 400 - margin.top - margin.bottom ;

var svg3 = d3.select("#graph3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  var graph3= function(data) {

   
    var x3 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x3));

    
    var y3 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y3));

   
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.Less_than_High_School_Graduate)) })
        )
       
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.High_School_Graduate)) })
        )
     
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.Some_College)) })
        )
     
      svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x(parseInt(d.Year)) })
        .y(function(d) { return y(parseInt(d.College_Graduate)) })
        )

}
var graph3Promise = d3.csv("../data/education.csv")
var successFCN3 = function(data)
{
    console.log(data);
    graph3(data);
}
var failFCN3 = function(error)
{
    console.log("error",error);
}


graph3Promise.then(successFCN3,failFCN3); 


