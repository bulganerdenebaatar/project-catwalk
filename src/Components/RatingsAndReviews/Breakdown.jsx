import React from 'react';
import PropTypes from 'prop-types';

function Breakdown({ ratings }) {
  // Take in a ratings object and return five bars (one for each numerical rating)
  // Each bar shows proportinally (green) how many of the reviews had this value
  const numberOfRatings = Object.values(ratings);
  const total = numberOfRatings.reduce((p, c) => p + Number(c), 0);

  return (
    <div className="breakdown">
      <RatingBar className="rating-bar" stars="1" percent={((Number(ratings[1]) * 100) / total).toString()} />
      <RatingBar className="rating-bar" stars="2" percent={((Number(ratings[2]) * 100) / total).toString()} />
      <RatingBar className="rating-bar" stars="3" percent={((Number(ratings[3]) * 100) / total).toString()} />
      <RatingBar className="rating-bar" stars="4" percent={((Number(ratings[4]) * 100) / total).toString()} />
      <RatingBar className="rating-bar" stars="5" percent={((Number(ratings[5]) * 100) / total).toString()} />
    </div>
  );
}

function RatingBar({ stars, percent }) {
  return (
    <div>
      <label htmlFor="test">
        {stars}
        {' '}
        Stars
        {' '}
      </label>
      <progress id="test" max="100" value={percent}>
        {percent}
        %
      </progress>
    </div>
  );
}

Breakdown.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }).isRequired,
};

RatingBar.propTypes = {
  stars: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default Breakdown;
// Example
// "ratings": {
//   "1": "1",
//   "2": "2",
//   "3": "2",
//   "4": "2",
//   "5": "21"
// }
