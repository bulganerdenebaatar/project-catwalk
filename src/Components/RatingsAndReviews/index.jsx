import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import RatingsBreakdown from './RatingsBreakdown.jsx';

const RandRStyle = styled.div`
  ${styles.Standard};
  height: fit-content;
  width: 100%;
`;

function RatingsAndReviews() {
  return (
    <RandRStyle className="ratingsAndReviews">
      <RatingsBreakdown />
    </RandRStyle>
  );
}

export default RatingsAndReviews;
