import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './OverviewComponents/ProductInfo.jsx';
import Styles from './OverviewComponents/Styles.jsx';
import MainView from './OverviewComponents/MainView.jsx';
import AddToCart from './OverviewComponents/AddToCart.jsx';
import { colors, styles } from '../../styles.js';
import { GlobalContext } from '../../App.jsx';

const OverviewStyle = styled.div`
  ${styles.Standard};
  display: grid;
  grid-template-columns: 60% 40%;
  height: fit-content;
`;

const ProductInteractions = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.5fr);
  width: fit-content;
`;



function Overview() {
  return (
    <OverviewStyle id="overview" data-testid="overview">
      <MainView />
      <ProductInteractions>
        <ProductInfo />
        <Styles />
        <AddToCart />
      </ProductInteractions>
    </OverviewStyle>
  );
}

export default Overview;
