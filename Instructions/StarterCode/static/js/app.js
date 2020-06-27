// function getPlot(id) {

// Use the D3 library to read in samples.json.
    d3.json("/Instructions/StarterCode/samples.json").then(function(data) {
        console.log(data);
     });

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    // filter sample values by id 
    var samples = data.samples.filter(s => s.id.toString() === id)[0];
    console.log(samples);

    // Getting the top 10 
    var samplevalues = samples.sample_values.slice(0, 10).reverse();

    // get only top 10 otu ids for the plot OTU and reversing it. 
    var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
    
    // get the otu id's to the desired form for the plot
    var OTU_id = OTU_top.map(d => "OTU " + d)

      console.log(`OTU IDS: ${OTU_id}`)


    // get the top 10 labels for the plot
    var labels = samples.otu_labels.slice(0, 10);

    //   console.log(`Sample Values: ${samplevalues}`)
    //   console.log(`Id Values: ${OTU_top}`)


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

  
    // d3.json(url).then(function(data) {
    // Grab values from the response json object to build the plots
        var name = samples.name;
        var OTU_id = samples.otu_ids;
        var otu_labels = samples.otu_labels;
        var otu = samples.id;
        var sample_values = samples.sample_values;
        // Print the names of the columns
        console.log(samples.column_names);
        // Print the data for each OTU
        console.log(samples.data);
        
        var trace1 = {
        x: sample_values,
        y: OTU_id,
        text: labels,
        marker: {
            color: 'rgb(142,124,195)'},
        type:"bar",
        orientation: "h",
        };

      var data = [trace1];
  
    // create data variable
      var data = [trace];

    // create layout variable to set plots layout
      var layout = {
          title: "Top 10 OTU",
          yaxis:{
              tickmode:"linear",
          },
          margin: {
              l: 100,
              r: 100,
              t: 100,
              b: 30
          }
      };
  
      Plotly.newPlot("plot", data, layout);
  
}
          

// *** Reference For the Dataset *** \\

// metadata: Array(153)
// [0 … 99]
// 0: {id: 940, ethnicity: "Caucasian", gender: "F", age: 24, location: "Beaufort/NC", …}

// names: Array(153)
// [0 … 99]
// 0: "940"
// 1: "941"

// samples: Array(153)
// [0 … 99]
// 0: {id: "940", otu_ids: Array(80), sample_values: Array(80), otu_labels: Array(80)}