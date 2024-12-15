import { handleFiles } from "./js/general/fileInputHandler.js";
import { convertToDataBase, processNextCycle } from "./js/heatmapDisplay.js";

/* ------------------------ Drawing map itself ------------------ */
console.log("Map setup...");

var pollutionData;
var map = L.map("map").setView([50.45, 30.523], 12); // Set the map view to Kyiv
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

console.log("Map setup... DONE");

const timeSelector = document.getElementById("timeSelector");
const selectedTimeDisplay = document.getElementById("selectedTime");

timeSelector.addEventListener("input", function () {
  selectedTimeDisplay.textContent = `${timeSelector.value}:00`;

  processNextCycle(pollutionData, timeSelector.value - 1, map);
});

document
  .getElementById("fileInput")
  .addEventListener("change", async (event) => {
    let convertedData = await handleFiles(event);

    pollutionData = convertToDataBase(convertedData, map);
  });
