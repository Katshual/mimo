function differenceMinMax(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max - min;
}

console.log(differenceMinMax([0, 7, 11, 100]));
console.log(differenceMinMax([55, 9, 22, 11]));
