import React from 'react';
import FiveStar from '../FiveStar.jsx';
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
    <FiveStar ratings={ratings} />
  );
}

export default RatingsBreakdown;
