const group = 4;
const total = 500;
const minimum = 150;

function stockCheck(groupSize, totalAvailable, minPerUser) {
  if (minPerUser > totalAvailable) {
    return "Insufficient for one user";
  } else if (groupSize * minPerUser > totalAvailable) {
    return "Insufficient for all users";
  } else {
    return "Sufficient for all users";
  }
}
console.log(stockCheck(4, 500, 150));
