import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../App.jsx';


function PercentRecommended() {
  const { recommended } = useContext(GlobalContext).ratingsData;
  const rec = Number(recommended.true);
  const total = Number(recommended.false) + rec;
  const percent = Math.floor((rec / total) * 100);
  return (
    <div>
      <p>
        { percent }
        % of reviews recommend this product
      </p>
    </div>
  );
}

export default PercentRecommended;
