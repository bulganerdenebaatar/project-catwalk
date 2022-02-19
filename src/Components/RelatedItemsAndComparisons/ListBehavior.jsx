import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import ProductCard from './RelatedProductCards.jsx';

// dont need
import { GlobalContext } from '../../App.jsx';


const ListStyle = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  border: 5px dotted red;
  overflow: hidden;
`;

const ContainerStyle = styled.div`
  border: 5px solid green;
  display: flex;
`;

function ListBehavior({ relatedProducts, relatedProductsItem, outfitPicks }) {

  return (
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
  );
}

ListBehavior.propTypes = {
  relatedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  relatedProductsItem: PropTypes.arrayOf(PropTypes.object).isRequired,
  outfitPicks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListBehavior;

