const usGbp = 1.5;

function usdToGbp(dollars) {
  return dollars / usGbp;
}
//console.log(usdToGbp(100));

function convert(value, fee) {
  let gbpValue = usdToGbp(value) - fee;
  console.log(gbpValue);
}
convert(100, 2.5);
