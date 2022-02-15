import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';

const testAsset = '../../../../test-assets/images/product.jpeg';

const OverviewStyle = styled.div`
  ${styles.Standard};

  height: fit-content;
  img {
    width: 100%;
  }
`;

function Overview() {
  return (
    <OverviewStyle className="overview">
      <h2 className="productName">Product Name</h2>
      <img src={testAsset} alt="test for overview component" />
    </OverviewStyle>
  );
}

export default Overview;
