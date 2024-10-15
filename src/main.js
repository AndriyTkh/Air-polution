import { handleFiles } from "./js/fileInputHandler.js";
import { displayHeatmap } from "./js/heatmapDisplay.js";

/* ------------------------ Drawing map itself ------------------ */
console.log("Map setup...");

var map = L.map("map").setView([50.45, 30.523], 12); // Set the map view to Kyiv
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

console.log("Map setup... DONE");

document
  .getElementById("fileInput")
  .addEventListener("change", async (event) => {
    let convertedData = await handleFiles(event);

    displayHeatmap(convertedData, map);
  });
