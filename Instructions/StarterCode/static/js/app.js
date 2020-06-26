// const url = "https://api.spacexdata.com/v2/launchpads";

// Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });



// Use the D3 library to read in samples.json.
d3.json("./StarterCode/samples.json", function(data) {
    console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);


// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// Use sample_values as the values for the bar chart.

// Use otu_ids as the labels for the bar chart.

// Use otu_labels as the hovertext for the chart.