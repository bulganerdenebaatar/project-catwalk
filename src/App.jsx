import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Overview from './Components/Overview/index.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/index.jsx';
import RelatedItemsAndComparisons from './Components/RelatedItemsAndComparisons/index.jsx';
import { colors, styles } from './styles.js';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.standardBGColor};
    color: ${colors.standardTxtColor};
    display: flex;
    flex-direction: column;
    font-family: 'Comfortaa', monospace;
    justify-content: center;
    position: relative;
  }
`;

const Title = styled.h1`
  background-color: ${colors.standardBGColor};
  color: rgb(80, 155, 255);
  font-weight: 700;
  padding: 10px 40px 10px 40px;
  position: sticky;
  text-shadow: -2px 2.5px 0 rgba(130, 200, 250, 0.9);
  top: 0;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Title>
          The Store?
        </Title>
        <Overview />
        <RatingsAndReviews />
        <RelatedItemsAndComparisons />
        <QuestionsAndAnswers />
      </div>
    );
  }
}

export default App;
