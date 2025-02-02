function contains(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return true;
    }
  }
  return false;
}
console.log(contains([1, 2, 3, 4], 3));
console.log(contains([2, 2, 4], 3));
