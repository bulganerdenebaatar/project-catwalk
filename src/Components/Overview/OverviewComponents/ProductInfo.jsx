import React from 'react';
import styled from 'styled-components';
import { product } from '../test_data/testdata.js';

const ProductInformation = styled.div`
  color: rgba(89, 255, 255, 0.9);
  .overview-info {
    padding: 5px;
  }
`;

function ProductInfo() {
  return (
    <ProductInformation>
      <h2 className="overview-info">{product.name}</h2>
      <h4 className="overview-info">{product.category}</h4>
      <h3 className="overview-info price">
        $
        {product.default_price}
      </h3>
      <div className="overview-info">{product.description}</div>
    </ProductInformation>
  );
}

export default ProductInfo;
