/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import FiveStar from '../../FiveStar.jsx';
import { GlobalContext } from '../../../App.jsx';
import { OverviewContext } from '../index.jsx';

const ProductInformationStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 0.5fr);
  margin-bottom: 10px;
  height: 80%;

  position: relative;
  top: -5%;

  .overview-info {
    padding: 1px;
  }

  h2{
    margin-bottom: 10px;
  }

  h4{
    margin: 0;
    margin-top: 10px;
    padding: 0;
  }

  p {
    margin: none;
  }

  em {
    color: red;
    font-size: 0.75em;
    text-decoration: line-through;
  }
`;

function ProductInformation() {

  const { closestQuarter } = useContext(GlobalContext).ratingsData;
  const { productInfo, salePrice } = useContext(OverviewContext);

  return (
    <ProductInformationStyle>
      <h2 className="overview-info name">{productInfo.name}</h2>
      <FiveStar className="overview-info stars" rating={closestQuarter} />
      <h4 className="overview-info category">{productInfo.category}</h4>
      <h3 className="overview-info price">
        { salePrice
          ? (<p>${salePrice} <em>{productInfo.default_price}</em></p>)
          : (<p>$ {productInfo.default_price}</p>)}
      </h3>
      <div className="overview-info description">{productInfo.description}</div>
    </ProductInformationStyle>
  );
}

export default ProductInformation;
