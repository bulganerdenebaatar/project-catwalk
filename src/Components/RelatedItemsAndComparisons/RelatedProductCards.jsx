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
  width: 250px;
  height: 400px;

  .div__pic {
    width: 100%;
    height: 250;
  }

  .pic {
    width: 100%;
    height: auto;
  }

  p {
    margin: 0;
  }

`;


function ProductCard() {
  return (
    <CardStyle className="product__card">
      <div>Star</div>
      <div className="div__pic">
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
