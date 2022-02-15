import React from 'react';
import styled from 'styled-components';
import ProductInfo from './OverviewComponents/ProductInfo.jsx';
import Styles from './OverviewComponents/Styles.jsx';
import { colors, styles } from '../../styles.js';
import { product, styleOptions } from './test_data/testdata.js';

const testAsset = '../../../../test-assets/images/product.jpeg';

const OverviewStyle = styled.div`
  ${styles.Standard};

  flex-direction: row;
  img {
    max-width: fit-content;
    max-height: fit-content;
  }
`;

const ProductOptions = styled.div`
  flex-direction: column;
`;

function Overview() {
  return (
    <OverviewStyle className="overview">
      <img src={styleOptions.results[0].photos[0].url} alt="test for overview component" />
      <ProductOptions>
        <ProductInfo />
        <Styles />
      </ProductOptions>
    </OverviewStyle>
  );
}

export default Overview;
