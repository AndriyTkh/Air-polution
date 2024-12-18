import { handleFiles } from "./js/general/fileInputHandler.js";
import { AddHeatMap } from "./js/general/filterFun.js";
import { convertToDataBase, processNextCycle } from "./js/heatmapDisplay.js";

/* ------------------------ Drawing map itself ------------------ */
console.log("Map setup...");

var baseLayer = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
  }
);

var cfg = {
  scaleRadius: true,
  radius: 0.001,
  /* radius: 10, */
  maxOpacity: 1,
  minOpacity: 0,
  blur: 0.8,
  // which field name in your data represents the latitude - default "lat"
  latField: "Latitude",
  // which field name in your data represents the longitude - default "lng"
  lngField: "Longitude",
  // which field name in your data represents the data value - default "value"
  valueField: "CO",
};

var heatmapLayer = new HeatmapOverlay(cfg);

var map = new L.Map("map", {
  center: new L.LatLng(50.45, 30.523),
  zoom: 12,
  layers: [baseLayer, heatmapLayer],
});

/* heatmapLayer.setData(testData); */

// make accessible for debugging
/* layer = heatmapLayer; */

var pollutionData;
/* var map = L.map("map").setView([50.45, 30.523], 12); // Set the map view to Kyiv
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

var heat = simpleheat("map"); */

console.log("Map setup... DONE");

const timeSelector = document.getElementById("timeSelector");
const selectedTimeDisplay = document.getElementById("selectedTime");

timeSelector.addEventListener("input", function () {
  selectedTimeDisplay.textContent = `${timeSelector.value}:00`;

  processNextCycle(pollutionData, timeSelector.value - 1, heatmapLayer);
});

document
  .getElementById("fileInput")
  .addEventListener("change", async (event) => {
    let convertedData = await handleFiles(event);

    pollutionData = convertToDataBase(convertedData, map);
  });
