import React from 'react';
import PropTypes from 'prop-types';
import FiveStar from '../FiveStar.jsx';

function RatingSummary({ number, ratings, average }) {
  return (
    <div>
      <div>{average}</div>
      <div className="stars-number">
        <FiveStar ratings={ratings} />
        <div>
          {number}
          {' '}
          reviews
        </div>
      </div>
    </div>
  );
}

RatingSummary.propTypes = {
  number: PropTypes.number.isRequired,
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }).isRequired,
  average: PropTypes.number.isRequired,
};

export default RatingSummary;
