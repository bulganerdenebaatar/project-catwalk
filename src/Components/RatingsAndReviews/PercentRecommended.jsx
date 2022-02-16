import React from 'react';
import PropTypes from 'prop-types';

function PercentRecommended({ percent }) {
  return (
    <div>
      <p>
        { percent }
        % of reviews recommend this product
      </p>
    </div>
  );
}

PercentRecommended.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default PercentRecommended;
