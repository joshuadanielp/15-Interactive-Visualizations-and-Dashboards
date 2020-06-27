// function buildPlot(sample) {

// Use the D3 library to read in samples.json.
d3.json("/Instructions/data/samples.json").then(function(data) {
    console.log(data);
  });

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


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
      var name = data.dataset.name;
      var stock = data.dataset.dataset_code;
      var startDate = data.dataset.start_date;
      var endDate = data.dataset.end_date;
      // Print the names of the columns
      console.log(data.dataset.column_names);
      // Print the data for each day
      console.log(data.dataset.data);
      var dates = data.dataset.data.map(row => row[0]);
      // console.log(dates);
      var closingPrices = data.dataset.data.map(row => row[4]);
      // console.log(closingPrices);
  
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      };
  
      var data = [trace1];
  
      var layout = {
        title: `${stock} closing prices`,
        xaxis: {
          range: [startDate, endDate],
          type: "date"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
  
    
  }
  
  // Add event listener for submit button
  d3.select("#selDataset").on("click", handleSubmit);



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