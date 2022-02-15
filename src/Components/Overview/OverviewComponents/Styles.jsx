import React from 'react';
import styled from 'styled-components';
import StyleIcon from './StyleIcon.jsx';
import { styleOptions } from '../test_data/testdata.js';


const StyleIcons = styled.div`
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 25%;
  width: fit-content;
`;

const testStyles = styleOptions.results;

function StyleSelection() {
  return (
    <StyleIcons>
      {testStyles.map((style) => <StyleIcon thumb={style.photos[1].thumbnail_url} />)}
    </StyleIcons>
  );
}

export default StyleSelection;
