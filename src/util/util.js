/* eslint-disable import/prefer-default-export */
const ratingsCalculator = function (ratings) {
  // expects to take in a ratings object and returns
  // {closestQuarter: num, averageRating: num, numberOfRating: num}
  const entries = Object.entries(ratings);
  const ratingsTotal = entries.reduce(((p, c) => p + Number(c[0]) * Number(c[1])), 0);
  const numberOfRatings = entries.reduce(((p, c) => p + Number(c[1])), 0);
  const averageRating = (Math.round((ratingsTotal / numberOfRatings) * 10) / 10);
  const closestQuarter = (Math.round(averageRating * 4) / 4);
  return { closestQuarter, averageRating, numberOfRatings };
};

export { ratingsCalculator };

