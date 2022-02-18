import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import ProductCard from './RelatedProductCards.jsx';

// dont need
import { GlobalContext } from '../../App.jsx';

// dont need
const ListStyle = styled.div`
  border: solid;
  background: blue;
  z-index: 20;
  width: 250px;
  height: 400px;
`;

const ContainerStyle = styled.div`
  border: solid;
  background: red;
  z-index: 20;
  width: 250px;
  height: 400px;
`;

function ListBehavior({ relatedProducts, relatedProductsItem, outfitPicks }) {

  return (
    <ListStyle>
      <ContainerStyle>
        {relatedProducts ? relatedProducts.map((product, index) => (
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

