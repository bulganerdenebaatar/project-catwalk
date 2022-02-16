import React from 'react';
import styled from 'styled-components';
import { product, styleOptions } from '../test_data/testdata.js';
import MainViewScroller from './MainViewScroller.jsx';

const ImageView = styled.span`
  img {
    width: 100%;
  }
`

function MainView() {
  return (
    <ImageView>
      <img src={styleOptions.results[0].photos[0].url} alt="test for overview component" />
      <MainViewScroller thumbs={styleOptions.results[0].photos}/>
    </ImageView>
  )
}

export default MainView;