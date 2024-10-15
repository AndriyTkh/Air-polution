import { removeDublicates, ClearMap } from "./filterFun.js";

export function displayHeatmap(pollutionData, map) {
  console.log("Displaying heatmap...");

  ClearMap(map);

  var heatData = pollutionData.map(function (row) {
    return {
      Lat: parseFloat(row.Latitude),
      Lon: parseFloat(row.Longitude),
      CO: parseFloat(row.CO),
      Time: row.Time,
      Date: row.Date,
    };
  });

  console.log(heatData);
  

  let cleanData = removeDublicates(heatData);

  var heat = L.heatLayer(cleanData, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    max: 4,
    gradient: { 0.4: "lime", 0.65: "yellow", 1: "red" },
  }).addTo(map);

  console.log("Displaying heatmap... DONE");
}
