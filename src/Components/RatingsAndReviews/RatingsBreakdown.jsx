/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import RatingSummary from './RatingSummary.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import { GlobalContext } from '../../App.jsx';

function RatingsBreakdown() {
  const { recommended, characteristics } = useContext(GlobalContext).ratingsData;

  return (
    <div>
      <RatingSummary />
      <hr />
      <Breakdown />
      <PercentRecommended />
      <hr />
      <Characteristics />
    </div>

  );
}

export default RatingsBreakdown;
