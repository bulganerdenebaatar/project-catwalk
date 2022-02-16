import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';

const RandRStyle = styled.div`
  ${styles.Standard};
  display: grid;
  grid-template-columns 1fr 2fr;
  height: fit-content;
  width: 100%;
`;

function RatingsAndReviews() {
  return (
    <RandRStyle className="ratingsAndReviews">
      <RatingsBreakdown />
      <ReviewsList />
    </RandRStyle>
  );
}

export default RatingsAndReviews;
