import React from 'react';
import FiveStar from '../FiveStar.jsx';
import Breakdown from './Breakdown.jsx';
// Test data
const ratings = {
  1: '1',
  2: '2',
  3: '8',
  4: '2',
  5: '4',
};

function RatingsBreakdown(props) {
  return (
    <div>
      <FiveStar ratings={ratings} />
      {/* <PercentRecommended /> */}
      <Breakdown ratings={ratings} />
    </div>

  );
}

export default RatingsBreakdown;
