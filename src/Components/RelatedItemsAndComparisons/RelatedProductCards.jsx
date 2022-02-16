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
  background: #fafafa;
  z-index: 2;
  width: 250px;
  height: 400px;

  .product__topStar {
    position: absolute;
    z-index: 3;
    right: 0;
  }

  .div__pic {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
  }

  .pic {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
  }

  p {
    margin: 5px;
  }

`;


function ProductCard() {
  return (
    <CardStyle className="product__card">
      <div className="div__pic">
        <div className="product__topStar">Star</div>
        <img src={productStyleData.results[0].photos[0].thumbnail_url} alt="placeholder for Product img" className="pic" />
      </div>
      <div className="product__info">
        <p>{productIdData.category}</p>
        <p>{productIdData.name}</p>
        <p>{productIdData.slogan}</p>
        <p>
          $
          {productIdData.default_price}
        </p>
        <FiveStar ratings={ratings} />
      </div>
    </CardStyle>
  );
}

export default ProductCard;



// Root div of Card will be clickable
