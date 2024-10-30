export default function sortByDate(data) {
  let sortedArray = [];
  let abc;
  console.log(sortedArray, abc);

  data.forEach((row) => {
    const date = row.Date;
    const hour = parseInt(row.Time.split(":")[0], 10); // Extract the hour

    // Initialize the date entry if it doesn't exist
    if (!sortedArray[date]) {
      sortedArray[date] = Array.from({ length: 24 }, () => []); // Create 24 arrays, one for each hour
      console.log(`Initialized ${date}:`, sortedArray[date]); // Check structure here
    }

    console.log(sortedArray);

    // Uncomment to actually add data to the correct hour array
    // sortedData[date][hour].push(row);
  });

  return sortedArray;
}
