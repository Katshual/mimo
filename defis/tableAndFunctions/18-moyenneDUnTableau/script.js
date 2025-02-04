function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(average([2, 2, 5, 8]));
console.log(average([59, 60, 40]));
