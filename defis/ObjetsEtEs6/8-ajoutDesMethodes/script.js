const tajMahal = {
  cuisine: "Indian",
  takeout: false,
  starRating: 4.5,
  tenRating: function () {
    return `${this.starRating * 2} `;
  },
};
tajMahal.starRating = 4.1;
console.log(tajMahal.tenRating());
