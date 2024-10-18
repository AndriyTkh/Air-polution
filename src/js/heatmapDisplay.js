import { removeDublicates, ClearMap, sortByDate } from "./filterFun.js";

export function displayHeatmap(pollutionData, map) {
  console.log("Displaying heatmap...");

  ClearMap(map);

  pollutionData = removeDublicates(pollutionData);

  pollutionData = sortByDate(pollutionData);

  var heat = L.heatLayer([], {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    max: 4,
    gradient: { 0.4: "lime", 0.65: "yellow", 1: "red" },
  }).addTo(map);

  console.log("Displaying heatmap... DONE");
}
