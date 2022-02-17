/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { product } from '../test_data/testdata.js';
import FiveStar from '../../FiveStar.jsx';
import { GlobalContext } from '../../../App.jsx';

const ProductInformation = styled.div`
  color: rgba(89, 255, 255, 0.9);
  display: grid;
  grid-template-rows: repeat(5, 0.5fr);

  .overview-info {
    padding: 1px;
  }
`;

function ProductInfo() {
  const { closestQuarter } = useContext(GlobalContext).ratings;
  return (
    <ProductInformation>
      <h2 className="overview-info name">{product.name}</h2>
      <FiveStar className="overview-info stars" rating={closestQuarter} />
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
