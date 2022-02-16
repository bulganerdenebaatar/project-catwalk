import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import RelatedProductCards from './RelatedProductCards.jsx';
import {
  productData, productIdData, productStyleData, relatedProductsData,
} from './other_test_data/othertestdata.js';

const RelatedStyle = styled.div`
  ${styles.Standard};
  height: 400px;
`;

function RelatedItemsAndComparisons() {
  return (
    <RelatedStyle className="relatedAndComparisons">
      <RelatedProductCards />
    </RelatedStyle>
  );
}

export default RelatedItemsAndComparisons;
