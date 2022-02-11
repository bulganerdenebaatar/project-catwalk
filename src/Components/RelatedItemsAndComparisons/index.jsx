import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';

const RelatedStyle = styled.div`
  ${styles.Standard};
  height: 400px;
`;

function RelatedItemsAndComparisons() {
  return (
    <RelatedStyle className="relatedAndComparisons">RELATED ITEMS AND COMPARISONS WILL GO HERE</RelatedStyle>
  );
}

export default RelatedItemsAndComparisons;
