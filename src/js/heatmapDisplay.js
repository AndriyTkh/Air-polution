import { ClearMap, AddHeatMap } from "./general/filterFun.js";
import removeDublicates from "./sorting/removeDublicates.js";
import sortByDate from "./sorting/sortByDate.js";
import averageFromDublicates from "./sorting/averageFromDublicates.js";

export function convertToDataBase(pollutionData) {
  console.log("Displaying heatmap...");

  pollutionData = removeDublicates(pollutionData);
  pollutionData = sortByDate(pollutionData);
  pollutionData = averageFromDublicates(pollutionData);

  return pollutionData;
}

export function processNextCycle(pollutionData, timeIndex, heatmapLayer) {
  const dateIndex = "2024-06-01";
  let dataList = pollutionData[dateIndex][timeIndex];

  /* ClearMap(heat); */

  /* dataList = dataList.map((row) => {
    return [row.Latitude, row.Longitude, row.CO];
  }); */

  if (dataList.length !== 0) {
    heatmapLayer.setData({ data: dataList, max: 2 });
  }
}
