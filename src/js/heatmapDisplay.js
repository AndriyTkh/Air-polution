import { removeDublicates } from "./filterFun";

export function displayHeatmap(pollutionData) {
  /* ------------------------ Drawing map itself ------------------ */
  console.log("Map setup...");

  var map = L.map("map").setView([50.45, 30.523], 12); // Set the map view to Kyiv
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  console.log("Map setup... DONE");

  /* -------------------- Drawing heatmap --------------------------- */

  console.log("Displaying heatmap...");
  console.log(pollutionData);

  var heatData = pollutionData.map(function (row) {
    return [
      parseFloat(row.Latitude),
      parseFloat(row.Longitude),
      parseFloat(row.CO),
    ];
  });

  var heat = L.heatLayer(cleanData, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    max: 4,
  }).addTo(map);

  console.log("Displaying heatmap... DONE");
}
