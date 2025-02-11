const tajMahalJSON =
  '{"cuisine": "Indian", "takeout": false, "starRating": 4.5}';
let tajMahal = JSON.parse(tajMahalJSON);
console.log(tajMahal);

const tenRating = tajMahal.starRating * 2;
console.log(tenRating);
