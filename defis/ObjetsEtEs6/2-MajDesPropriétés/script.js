const tajMahal = {
  cuisine: "Indian",
  takeout: false,
  starRating: 4.5,
};
tajMahal.takeout = true;
console.log(tajMahal);
let stringTajMahal = JSON.stringify(tajMahal);
console.log(stringTajMahal);
