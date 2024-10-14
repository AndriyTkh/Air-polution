import { handleFiles } from "./js/fileInputHandler.js";
import { displayHeatmap } from "./js/heatmapDisplay.js";
/* import SetupMap from "./js/mapSetup.js";

SetupMap(); */

document
  .getElementById("fileInput")
  .addEventListener("change", async (event) => {
    let convertedData = await handleFiles(event);

    displayHeatmap(convertedData);
  });
