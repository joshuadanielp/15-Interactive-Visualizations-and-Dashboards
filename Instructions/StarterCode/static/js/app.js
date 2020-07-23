// Use the D3 library to read in samples.json.
d3.json("./samples.json").then(function(data) {
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
// optionChanged(d3.select("#selSeason").property("value"));

function buildPlot() {
    var dropdown = d3.select("#selDataset");
    var dataset = dropdown.property("value");
    updatePlotly(dataset);
}

//getData function added in...

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
    var otu_labels = test[0]["otu_labels"]
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

    // create layout variable to set plots layout
    var layout = {
        title: "Top 10 OTUs",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30,
        labels: otu_labels
        }
    };
    Plotly.newPlot("bubble", data, layout)

    };
});