const windSpeed = 20;
const rainFall = 2;

function windRisk(wind) {
  return wind / 2.5;
}

function rainRisk(rain) {
  return rain / 0.5;
}

function isSafe(wind, rain) {
  let risk = windRisk(wind) + rainRisk(rain);
  if (risk < 10) {
    return true;
  } else {
    return false;
  }
}====
console.log(isSafe(windSpeed, rainFall));
