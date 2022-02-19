import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import ProductCard from './RelatedProductCards.jsx';

// dont need
import { GlobalContext } from '../../App.jsx';




function ListBehavior({ relatedProducts, relatedProductsItem, outfitPicks }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const WrapperStyle = styled.div`
  position: relative;
  height: 250px;
  display: flex;
`;

  const ListStyle = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  border: 5px dotted red;
  overflow: hidden;
`;

  const ContainerStyle = styled.div`
  border: 5px solid green;
  display: inline-flex;
  width: 12.5rem;
  transition: transform 0.3;
  transform: translateX(-${activeIndex * 105}%);
`;

  const LeftArrow = styled.span`
  font-family: FontAwesome;
  font-size: 2em;
  content: &#Xf104;
  position: relative;
  // top: 45%;
  // bottom: 50%;
  // left: 33%;
  width: 15%;
  color: rgba(100, 190, 250, ${activeIndex ? 1 : 1});
  :hover {
    cursor:${activeIndex ? 'pointer' : 'auto'}
  }
`;

  const RightArrow = styled.span`
  font-family: FontAwesome;
  font-size: 2em;
  content: &#Xf105;
  // top: 33%;
  // left: 20%;
  // bottom: 33%;
  // width: 100%;
  color: rgba(100, 190, 250, ${(activeIndex === relatedProducts.length - 1) ? 0 : 1});
  position: relative;
  :hover {
    cursor: ${(activeIndex === relatedProducts.length - 1) ? 'auto' : 'pointer'};
  }
`;

  const handleArrowClick = (direction) => {

    if (direction === 'next') {
      const nextIndex = activeIndex + 1;
      if (nextIndex === relatedProducts.length) return;

      setActiveIndex(nextIndex);
    }

    if (direction === 'prev') {
      const prevIndex = activeIndex - 1;
      if (prevIndex <= 0) return;
      setActiveIndex(prevIndex);
    }

  };

  return (
    <WrapperStyle>
      <LeftArrow
        className="fas fa-angle-left fa-lg"
        type="button"
        value="left"
        onClick={() => handleArrowClick('prev')}
      />
      <ListStyle>
        <ContainerStyle>
          {relatedProductsItem ? relatedProducts.map((product, index) => (
            <ProductCard
              product={product}
              relatedProductsItem={relatedProductsItem}
              index={index}
            />
          )) : console.log('BANG: ', outfitPicks)}
        </ContainerStyle>
      </ListStyle>
      <RightArrow
        className="fas fa-angle-right fa-lg"
        type="button"
        value="right"
        onClick={() => handleArrowClick('next')}
      />
    </WrapperStyle>
  );
}

ListBehavior.propTypes = {
  relatedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  relatedProductsItem: PropTypes.arrayOf(PropTypes.object).isRequired,
  outfitPicks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListBehavior;

