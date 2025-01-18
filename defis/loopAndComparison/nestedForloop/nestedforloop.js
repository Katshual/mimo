let temperature_data = [
  [60.2, 61.2, 63.4, 64.8, 65.1, 63.2, 62.9],
  [62.5, 63.8, 63.4, 64.6, 65.8, 64.9, 66.2],
  [66.3, 66.8, 66.4, 66.8, 67.8, 67.9, 68.2],
];
for (let i = 0; i < temperature_data.length; i++) {
  let length = temperature_data[i].length;
  let weeklySum = 0;
  for (let j = 0; j < length; j++) {
    weeklySum += temperature_data[i][j];
  }

  console.log("Week " + i + " Average Temperature: " + weeklySum / 7);
}
