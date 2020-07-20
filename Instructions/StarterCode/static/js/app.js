// Use the D3 library to read in samples.json.
d3.json("/samples.json").then(function(data) {
    var idList = new Array()
    data.samples.forEach(function(sample) {
        idList.push(sample["id"])
    });
    var dropdown = d3.select("#selDataset");
    for (var i=0; i < idList.length; i++) {
        dropdown.append("option").text(idList[i])
    };

//Grab id from dropdown
d3.select("#selDataset").on("change", buildPlot);

function buildPlot() {
    var dropdown = d3.select("#selDataset");
    var dataset = dropdown.property("value");
    updatePlotly(dataset);
}

var metadata = data.metadata;
var test = data.samples;

var demographics = d3.select("#sample-metadata")
demographics.append("p").text(`ID: ${idList[0]}`);
demographics.append("p").text(`Ethnicity: ${metadata[0]["ethnicity"]}`);
demographics.append("p").text(`Gender: ${metadata[0]["gender"]}`);
demographics.append("p").text(`Age: ${metadata[0]["age"]}`);
demographics.append("p").text(`Location: ${metadata[0]["location"]}`);
demographics.append("p").text(`bbtype: ${metadata[0]["bbtype"]}`);
demographics.append("p").text(`wfreq: ${metadata[0]["wfreq"]}`);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
buildPlot()
function buildPlot() {
    var otuIds = test[0]["otu_ids"]
    slicedOtuIds = otuIds.slice(0, 10)

    // Use sample_values as the values for the bar chart.
    var sampleValues = test[0]["sample_values"]
    slicedSampleValues = sampleValues.slice(0, 10)
    var trace1 = {
        x: slicedSampleValues,
        y: slicedOtuIds.toString(),
        type: "bar",
        orientation: "h"
    };
    var data = [trace1]
    Plotly.newPlot("bar", data);
    var trace2 = {
        x: otuIds,
        y: sampleValues,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuIds
        }
    };
    var data = [trace2]
    Plotly.newPlot("bubble", data)
    };
});
    




    // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    
        // filter sample values by id 
        // var samples = data.samples.filter(s => s.id.toString() === id)[0];
        // console.log(samples);
    
        // get only top 10 otu ids for the plot OTU and reverse
        // var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
        
        // get the otu id's to the desired form for the plot
        // var OTU_id = OTU_top.map(d => "OTU " + d)
    
        //   console.log(`OTU IDS: ${OTU_id}`)
    
    
        // get the top 10 labels for the plot
        // var labels = samples.otu_labels.slice(0, 10);
    
        // console.log(`Sample Values: ${samplevalues}`)
        // console.log(`Id Values: ${OTU_top}`)
    
    
    // Use sample_values as the values for the bar chart.
    // Submit Button handler
    // function handleSubmit() {
    //     // Prevent the page from refreshing
    //     d3.event.preventDefault();
      
    //     // Select the input value from the form
    //     var selection = d3.select("#selDataset").node().value;
    //     console.log(selection);
      
    //     // clear the input value
    //     d3.select("#selDataset").node().value = "";
      
    //     // Build the plot with the new stock
    //     buildPlot(selection);
    //   }
    
    // Use otu_ids as the labels for the bar chart.
    
    // Use otu_labels as the hovertext for the chart.
    
      
        // // d3.json(url).then(function(data) {
        // // Grab values from the response json object to build the plots
        //     var name = samples.name;
        //     var OTU_id = samples.otu_ids;
        //     var otu_labels = samples.otu_labels;
        //     var otu = samples.id;
        //     var sample_values = samples.sample_values;
        //     // Print the names of the columns
        //     console.log(samples.column_names);
        //     // Print the data for each OTU
        //     console.log(samples.data);
            
        //     var trace1 = {
        //     x: sample_values,
        //     y: OTU_id,
        //     text: labels,
        //     marker: {
        //         color: 'rgb(124,195,188)'},
        //     type:"bar",
        //     orientation: "h",
        //     };
      
        // // create data variable
        //   var data = [trace];
    
        // // create layout variable to set plots layout
        //   var layout = {
        //       title: "Top 10 OTU",
        //       yaxis:{
        //           tickmode:"linear",
        //       },
        //       margin: {
        //           l: 100,
        //           r: 100,
        //           t: 100,
        //           b: 30
        //       }
        //   };
      
        //   Plotly.newPlot("plot", data, layout);