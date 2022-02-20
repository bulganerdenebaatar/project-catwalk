import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import OutfitList from './OutfitList.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';
import {
  productData, productIdData, productStyleData, relatedProductsData,
} from './other_test_data/othertestdata.js';

const RelatedStyle = styled.div`
  ${styles.Standard};
  height: 400px;
`;

const Title = styled.h3`
  font-family: inherit;
`;

function RelatedItemsAndComparisons() {
  return (
    <RelatedStyle className="relatedAndComparisons">
      <Title>
        Related Products
      </Title>
      <RelatedProductsList />
      <Title>
        Outfits
      </Title>
      <OutfitList />
    </RelatedStyle>
  );
}

export default RelatedItemsAndComparisons;
