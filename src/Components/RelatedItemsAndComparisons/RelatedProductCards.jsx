import React from 'react';
import styled from 'styled-components';
import FiveStar from '../FiveStar.jsx';

import {
  productData, productIdData, productStyleData, relatedProductsData,
} from './other_test_data/othertestdata.js';


const ratings = {
  1: '1',
  2: '2',
  3: '8',
  4: '2',
  5: '4',
};

const CardStyle = styled.div`
  border: solid;
  background: blue;
  z-index: 2;

  .pic {
    height: 30px;
  }

`;


function ProductCard() {
  return (
    <CardStyle className="product__card">
      <div>Star</div>
      <img src={productStyleData.results[0].photos[0].thumbnail_url} alt="placeholder for Product img" className="pic" />
      <div className="product__info">
        <div>{productIdData.category}</div>
        <div>{productIdData.name}</div>
        <div>{productIdData.slogan}</div>
        <div>{productIdData.default_price}</div>
        <FiveStar ratings={ratings} />
      </div>
    </CardStyle>
  );
}

export default ProductCard;



// Root div of Card will be clickable
