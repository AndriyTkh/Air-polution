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

    if (a[0] !== b[0]) {
      cleanData.push(heatData[index]);
    }
  }
  cleanData.push(heatData[heatData.length - 1]);

  console.log("Dublicates filtered.");

  return cleanData;
}

export function sortByDate(data) {
  const sortedData = {};

    // Loop through the data and parse the Date and Time
    data.forEach(row => {
        const date = row.Date;  // Assuming Date is in YYYY-MM-DD format
        const time = row.Time;  // Assuming Time is in HH:MM:SS format

        // Extract the hour from the time
        const hour = parseInt(time.split(':')[0], 10);  // Get the hour as a number

        // If the date doesn't exist in sortedData, create an array for the date
        if (!sortedData[date]) {
            sortedData[date] = Array.from({ length: 24 }, () => []);  // Create 24 empty arrays (one for each hour)
        }

        // Push the row into the appropriate hour array
        sortedData[date][hour].push(row);
    });

    return sortedData;
}