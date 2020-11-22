var margin3 = {top: 50, right: 30, bottom: 30, left: 60} ;
var width3 = 460 - margin3.left - margin3.right ;
var height3 = 400 - margin3.top - margin3.bottom ;

var svg3 = d3.select("#graph3")
  .append("svg")
    .attr("width", width3 + margin3.left + margin3.right)
    .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin3.left + "," + margin3.top + ")");
  
  var graph3= function(data) {

   
    var x3 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width3 ]);
    svg3.append("g")
      .attr("transform", "translate(0," + height3 + ")")
      .call(d3.axisBottom(x3));

    
    var y3 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height3, 0 ]);
    svg3.append("g")
      .call(d3.axisLeft(y3));

   
    svg3.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x3(parseInt(d.Year)) })
        .y(function(d) { return y3(parseInt(d.Less_than_High_School_Graduate)) })
        )
       
      svg3.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x3(parseInt(d.Year)) })
        .y(function(d) { return y3(parseInt(d.High_School_Graduate)) })
        )
     
      svg3.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x3(parseInt(d.Year)) })
        .y(function(d) { return y3(parseInt(d.Some_College)) })
        )
     
      svg3.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x3(parseInt(d.Year)) })
        .y(function(d) { return y3(parseInt(d.College_Graduate)) })
        )
      
      svg3.append("text")
      .attr("class", "x3 label")
      .attr("text-anchor", "middle")
      .attr("x", width3)
      .attr("y", height3 -10)
      .text("Year")
      
      svg3.append("text")
      .attr("class", "y3 label")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      
      .text("Percentage")
      
      

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


