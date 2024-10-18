import { removeDublicates, ClearMap, sortByDate } from "./filterFun.js";

export function displayHeatmap(pollutionData, map) {
  console.log("Displaying heatmap...");

  ClearMap(map);

  pollutionData = removeDublicates(pollutionData);

  pollutionData = sortByDate(pollutionData);

  console.log(pollutionData);
  
  let dayIndex = "2024-06-01";
  let timeIndex = 0;
  setInterval(() => {
    console.log(timeIndex);
    
    let dataList = pollutionData[dayIndex][timeIndex];
    ClearMap(map);

    dataList = dataList.map((row) => {
      return [row.Latitude, row.Longitude, row.CO]
    })
    
    var heat = L.heatLayer(dataList, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    max: 2,
    gradient: { 0.4: "lime", 0.65: "yellow", 1: "red" },
    }).addTo(map);
    
    timeIndex++;
  }, 1000)

  console.log("Displaying heatmap... DONE");
}
