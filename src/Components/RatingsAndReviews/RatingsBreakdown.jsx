/* eslint-disable import/no-cycle */
import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';

// Test data
const ratings = {
  1: '1',
  2: '2',
  3: '8',
  4: '2',
  5: '4',
};

const characteristics = {
  Fit: {
    id: 135224,
    value: '2.7142857142857143',
  },
  Length: {
    id: 135225,
    value: '3.4285714285714286',
  },
  Comfort: {
    id: 135226,
    value: '3.1428571428571429',
  },
  Quality: {
    id: 135227,
    value: '3.1428571428571429',
  },
};

function RatingsBreakdown(props) {
  return (
    <div>
      <RatingSummary number={17} />
      <PercentRecommended percent={10} />
      <Breakdown ratings={ratings} />
      <Characteristics characteristics={characteristics} />
    </div>

  );
}

export default RatingsBreakdown;
