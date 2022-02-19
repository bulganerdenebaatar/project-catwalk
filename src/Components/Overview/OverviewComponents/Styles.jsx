import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import StyleName from './StyleName.jsx';
import { styleOptions } from '../test_data/testdata.js';
import { OverviewContext } from '../index.jsx';
import loading from './assets/loading.gif';


const StyleSelectors = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 70px);
  width: min-content;

  img{
    width: 50px;
    height: 50px;
  }
`;

const testStyles = styleOptions.results;

function StyleSelection() {
  const { productStyles, currentStyleSelection } = useContext(OverviewContext);

  if (productStyles.length) {
    const [currentStyleName, setCurrentStyleName] = useState(productStyles[0].name);
    return (
      <div>
        {currentStyleName}
        <StyleSelectors>
          {productStyles.map((style) => (
            <StyleName
              thumb={style.name}
              key={style.style_id}
              styleId={style.style_id}
              setCurrentStyleName={setCurrentStyleName}
            />
          ))}
        </StyleSelectors>
      </div>
    );
  }
  return (
    <StyleSelectors>
      <img src={loading} alt="loading..." />
    </StyleSelectors>
  );
}

export default StyleSelection;
