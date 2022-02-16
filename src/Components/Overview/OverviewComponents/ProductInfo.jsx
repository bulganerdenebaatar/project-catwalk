import React from 'react';
import styled from 'styled-components';
import { product } from '../test_data/testdata.js';
import FiveStar from '../../FiveStar.jsx';

const ratings = {
  1: '1',
  2: '2',
  3: '8',
  4: '2',
  5: '4',
};

const ProductInformation = styled.div`
  color: rgba(89, 255, 255, 0.9);
  display: grid;
  grid-template-rows: repeat(5, 0.5fr);

  .overview-info {
    padding: 1px;
  }
`;

function ProductInfo() {
  return (
    <ProductInformation>
      <h2 className="overview-info name">{product.name}</h2>
      <FiveStar className="overview-info stars" ratings={ratings}/>
      <h4 className="overview-info category">{product.category}</h4>
      <h3 className="overview-info price">
        $
        {product.default_price}
      </h3>
      <div className="overview-info description">{product.description}</div>
    </ProductInformation>
  );
}

export default ProductInfo;
