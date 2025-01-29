let prices = [2500.25, 3482.5, 1746.5];
let total = prices.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(total);
