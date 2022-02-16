import React from 'react';
import styled from 'styled-components';
import { styleOptions } from '../test_data/testdata.js';


const Scroller = styled.div`
  border: thick solid rgba(100, 100, 100, 0.5);
  display: grid;
  grid-template-columns: repeat(7, 14.3%);
  img {
    width: 100%;
    height: 60px;
    overflow: hide;
  }
`

function MainViewScroller ({ thumbs }) {
  return (
    <Scroller>
      {thumbs.map((image) => <img src={image.thumbnail_url} alt="placeholder renders" />)}
    </Scroller>
  )
}

export default MainViewScroller;
