/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import FiveStar from '../FiveStar.jsx';
import { GlobalContext } from '../../App.jsx';


function RatingSummary() {
  const { averageRating, closestQuarter, numberOfRatings } = useContext(GlobalContext).ratings;
  console.log(averageRating, closestQuarter);
  return (
    <div>
      <div>{averageRating}</div>
      <div className="stars-number">
        <FiveStar rating={closestQuarter} />
        <div>
          {numberOfRatings}
          {' '}
          reviews
        </div>
      </div>
    </div>
  );
}

export default RatingSummary;
