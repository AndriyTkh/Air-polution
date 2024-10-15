import { removeDublicates } from "./filterFun.js";

export function displayHeatmap(pollutionData, map) {
  console.log("Displaying heatmap...");

  console.log(map.layers);
  if (map != undefined) {
    map.remove();
  }

  console.log(pollutionData);

  var heatData = pollutionData.map(function (row) {
    return [
      parseFloat(row.Latitude),
      parseFloat(row.Longitude),
      parseFloat(row.CO),
    ];
  });

  let cleanData = removeDublicates(heatData);

  console.log(cleanData);

  var heat = L.heatLayer(cleanData, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    max: 4,
    gradient: { 0.4: "lime", 0.65: "yellow", 1: "red" },
  }).addTo(map);

  console.log("Displaying heatmap... DONE");
}
