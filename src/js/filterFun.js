export function ClearMap(map) {
  map.eachLayer((layer) => {
    if (layer.options.attribution !== "&copy; OpenStreetMap contributors") {
      layer.remove();
    }
  });
}

export function removeDublicates(heatData) {
  let cleanData = [];
  for (let index = 0; index < heatData.length - 1; index++) {
    const a = heatData[index];
    const b = heatData[index + 1];

    if (a.Latitude !== b.Latitude) {
      cleanData.push(heatData[index]);
    }
  }
  cleanData.push(heatData[heatData.length - 1]);

  console.log("Dublicates filtered.");
  return cleanData;
}

export function sortByDate(data) {
  const sortedData = [];

  data.map((row) => {
    const date = row.Date;
    const hour = parseInt(row.Time.split(":")[0], 10); // Extract the hour

    // Initialize the date entry if it doesn't exist
    if (!sortedData[date]) {
      sortedData[date] = Array.from({ length: 24 }, () => []); // Create 24 arrays, one for each hour
    }

    sortedData[date][hour].push(row);
  });

  console.log("Sorted by date");
  return sortedData;
}

export function AddHeatMap(heatData, map) {
  var heat = L.heatLayer(heatData, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    max: 2,
    gradient: { 0.4: "lime", 0.65: "yellow", 1: "red" },
  }).addTo(map);
}

export const asyncTimeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
