export default function averageFromDublicates(datedArray, tolerance = 0.0001) {
  const dates = Object.keys(datedArray);

  console.log("Start Data: ------------------------------");
  console.log(datedArray);

  dates.forEach((date, dateIndex) => {
    console.log(date);

    datedArray[date] = datedArray[date].map((hour, hourIndex) => {
      if (hourIndex === 0) {
        return [];
      } else {
        let prevHour = datedArray[date][hourIndex - 1];

        if (prevHour.length !== 0) {
          if (hour.length !== 0) {
            /* console.log(1, prevHour.concat(hour)); */

            return prevHour.concat(hour);
          } else {
            /* console.log(2); */

            return prevHour;
          }
        }
      }
    });
  });
  return datedArray;
}
