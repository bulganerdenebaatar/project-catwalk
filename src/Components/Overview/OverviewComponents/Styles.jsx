import React from 'react';
import styled from 'styled-components';
import StyleName from './StyleName.jsx';
import { styleOptions } from '../test_data/testdata.js';


const StyleNames = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50%);
  grid-template-rows: repeat(auto-fill, fit-content);
  width: 50%;
`;

const testStyles = styleOptions.results;

function StyleSelection() {
  return (
    <StyleNames>
      {testStyles.map((style) => <StyleName thumb={style.name} />)}
    </StyleNames>
  );
}

export default StyleSelection;
