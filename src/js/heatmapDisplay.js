export function processNextCycle(pollutionData, timeIndex, heatmapLayer) {
  const dateIndex = "2024-06-01";

  /* pollutionData = averageFromDublicates(pollutionData); */
  let dataList = pollutionData[dateIndex][timeIndex];


  if (dataList.length !== 0) {
    heatmapLayer.setData({ data: dataList, min: 0.6, max: 2 });
  }
}
