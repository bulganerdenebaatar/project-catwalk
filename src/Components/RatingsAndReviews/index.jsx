import React from 'react';
import styled from 'styled-components';

const RandRStyle = styled.div`
  border: 3px solid rgba(52, 168, 152, 66);
  border-radius: 20px;
  height: 200px;
  max-width: 85%;
  margin: 20px;
  padding: 20px;
`;

function RatingsAndReviews() {
  return (
    <RandRStyle className="ratingsAndReviews">RATINGS AND REVIEWS WILL GO HERE</RandRStyle>
  );
}

export default RatingsAndReviews;
