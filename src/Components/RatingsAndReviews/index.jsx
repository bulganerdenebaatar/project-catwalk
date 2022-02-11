import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';

const RandRStyle = styled.div`
  ${styles.Standard};
  height: 200px;
`;

function RatingsAndReviews() {
  return (
    <RandRStyle className="ratingsAndReviews">RATINGS AND REVIEWS WILL GO HERE</RandRStyle>
  );
}

export default RatingsAndReviews;
