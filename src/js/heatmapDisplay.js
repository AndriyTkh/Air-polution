import {
  removeDublicates,
  ClearMap,
  sortByDate,
  AddHeatMap,
} from "./filterFun.js";
import {
  initializeDate,
  formatDate,
  changeDay,
  changeHour,
  formatTime,
} from "./dateFun.js";

export function displayHeatmap(pollutionData, map) {
  console.log("Displaying heatmap...");

  ClearMap(map);
  pollutionData = removeDublicates(pollutionData);
  pollutionData = sortByDate(pollutionData);

  console.log(pollutionData);

  let dateDT = initializeDate("2024-06-01", "00:00:00");
  let dateIndex;
  let timeIndex;

  let dataList = pollutionData["2024-06-01"][16];
  ClearMap(map);

  dataList = dataList.map((row) => {
    return [row.Latitude, row.Longitude, row.CO];
  });

  AddHeatMap(dataList, map);

  /* ---------- Interval Logic ------------ */
  function processNextCycle() {
    dateIndex = formatDate(dateDT);
    timeIndex = dateDT.getHours();

    const timeDisplay = document.getElementById("selectedTime");
    timeDisplay.textContent = `Current date: ${dateIndex}, time: ${formatTime(
      dateDT
    )}`;

    /* ---------- Actual stuff --------- */
    if (true) {
      let dataList = pollutionData[dateIndex][timeIndex];
      ClearMap(map);

      dataList = dataList.map((row) => {
        return [row.Latitude, row.Longitude, row.CO];
      });

      AddHeatMap(dataList, map);

      dateDT = changeHour(dateDT, 1);
      setTimeout(processNextCycle, 500);
    } else {
      console.log(`No data for ${dateIndex}, hour ${timeIndex}, skipping...`);
      dateDT = changeHour(dateDT, 1);

      // Check for the end of the day
      if (timeIndex >= 24) {
        if (dateIndex === "2024-06-02") {
          return;
        }
        dateDT.setHours(0);
        dateDT = changeDay(dateDT, 1);
      }

      processNextCycle();
    }
  }

  /* processNextCycle(); */
}
