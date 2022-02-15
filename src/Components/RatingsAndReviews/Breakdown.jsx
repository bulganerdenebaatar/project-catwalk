import React from 'react';
import PropTypes from 'prop-types';

function Breakdown({ ratings }) {
  // Take in a ratings object and return five bars (one for each numerical rating)
  // Each bar shows proportinally (green) how many of the reviews had this value
  return (
    <RatingBar />
  );
}

function RatingBar(props) {
  return (
    <div>
      <h3>{props.number}</h3>
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
