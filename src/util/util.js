/* eslint-disable max-len */
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

const dateFormatter = (unformattedDate) => {
  const months = ['indexSpacer', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const chunks = unformattedDate.split('-');
  const year = chunks[0];
  const month = months[Number(chunks[1])];
  let day = chunks[2].substring(0,2);
  if (day[0] === '0') day = day[1];
  return `${month} ${day}, ${year}`;
};

export { ratingsCalculator, dateFormatter };

