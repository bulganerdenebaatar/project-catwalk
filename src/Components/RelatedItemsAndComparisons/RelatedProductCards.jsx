import React from 'react';
import styled from 'styled-components';
import FiveStar from '../FiveStar.jsx';

const testAsset = '../../../../test-assets/images/product.jpeg';

const ratings = {
  1: '1',
  2: '2',
  3: '8',
  4: '2',
  5: '4',
};

const CardStyle = styled.div`
  border: solid;
`;

function ProductCard() {
  return (
    <CardStyle className="product__card">
      <div>Star</div>
      <img src={testAsset} alt="placeholder for Product img" />
      <div className="product__info">
        <div>CATEGORY</div>
        <div>Expanded Product Name with Extra Text</div>
        <div>$123</div>
        <div className="product__rating">
          <FiveStar ratings={ratings} />
        </div>
      </div>
    </CardStyle>
  );
}

export default ProductCard;



// Root div of Card will be clickable
