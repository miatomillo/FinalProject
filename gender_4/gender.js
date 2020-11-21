var margin4 = {top: 10, right: 30, bottom: 30, left: 60} ;
var width4 = 460 - margin4.left - margin4.right ;
var height4 = 400 - margin4.top - margin4.bottom ;

var svg4 = d3.select("#graph4")
  .append("svg")
    .attr("width", width4 + margin4.left + margin4.right)
    .attr("height", height4 + margin4.top + margin4.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin4.left + "," + margin4.top + ")");
  
  var graph4= function(data) {

   
    var x4 = d3.scaleLinear()
      .domain([2000,2020])
      .range([ 0, width4 ]);
    svg4.append("g")
      .attr("transform", "translate(0," + height4 + ")")
      .call(d3.axisBottom(x4));

    
    var y4 = d3.scaleLinear()
      .domain([0, 100])
      .range([ height4, 0 ]);
    svg4.append("g")
      .call(d3.axisLeft(y4));

   
    svg4.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x4(parseInt(d.Year)) })
        .y(function(d) { return y4(parseInt(d.Men)) })
        )
    
      svg4.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .x(function(d) { return x4(parseInt(d.Year)) })
        .y(function(d) { return y4(parseInt(d.Women)) })
        )
      
       
      

}
var graph4Promise = d3.csv("../data/gender.csv")
var successFCN4 = function(data)
{
    console.log(data);
    graph4(data);
}
var failFCN4 = function(error)
{
    console.log("error",error);
}


graph4Promise.then(successFCN4,failFCN4); 


