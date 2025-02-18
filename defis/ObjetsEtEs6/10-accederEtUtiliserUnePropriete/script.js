const tajMahal = {
  cuisine: "Indian",
  takeout: false,
  starRating: 4.5,
};
const preferredCuisines = ["Chinese", "Italian", "Turkish"];
const inPreferred = preferredCuisines.includes(tajMahal.cuisine);
console.log(inPreferred);
