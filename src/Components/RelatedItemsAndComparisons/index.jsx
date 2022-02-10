import React from 'react';
import styled from 'styled-components';

const RelatedStyle = styled.div`
  border: 3px solid rgba(52, 168, 152, 66);
  border-radius: 20px;
  height: 200px;
  margin: 20px;
  max-width: 85%;
  overflow-x: scroll;
  padding: 20px;
`;

function RelatedItemsAndComparisons() {
  return (
    <RelatedStyle className="relatedAndComparisons">RELATED ITEMS AND COMPARISONS WILL GO HERE</RelatedStyle>
  );
}

export default RelatedItemsAndComparisons;
