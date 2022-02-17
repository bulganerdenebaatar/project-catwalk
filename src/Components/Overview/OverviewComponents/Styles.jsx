import React, { useContext } from 'react';
import styled from 'styled-components';
import StyleName from './StyleName.jsx';
import { styleOptions } from '../test_data/testdata.js';
import { GlobalContext } from '../../../App.jsx';
import loading from './assets/loading.gif';


const StyleNames = styled.div`
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
  const { productStyles } = useContext(GlobalContext);
  const styles = productStyles.results;
  if (styles) {
    return (
      <StyleNames>
        {styles.map((style) => (
          <StyleName
            thumb={style.name}
            key={style.style_id}
            styleId={style.style_id}
          />
        ))}
      </StyleNames>
    );
  }
  return (
    <StyleNames>
      <img src={loading} alt="loading..." />
    </StyleNames>
  );
}

export default StyleSelection;
