import React, { useContext } from 'react';
import styled from 'styled-components';
import FiveStar from '../FiveStar.jsx';
import { GlobalContext } from '../../App.jsx';

const Summary = styled.div`
  display: flex;
`;

const BigNumber = styled.div`
  font-size: 200%;
`;

const LittleText = styled.div`
  font-size: 60%;
`;

function RatingSummary() {
  const { averageRating, closestQuarter, numberOfRatings } = useContext(GlobalContext).ratingsData;
  return (
    <Summary>
      <BigNumber>{averageRating}</BigNumber>
      <div className="stars-number">
        <FiveStar rating={closestQuarter} />
        <LittleText>
          {numberOfRatings}
          {' '}
          ratings
        </LittleText>
      </div>
    </Summary>
  );
}

export default RatingSummary;
