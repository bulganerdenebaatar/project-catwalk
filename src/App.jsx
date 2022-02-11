import React from 'react';
import styled from 'styled-components';
import Overview from './Components/Overview/index.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/index.jsx';
import RelatedItemsAndComparisons from './Components/RelatedItemsAndComparisons/index.jsx';
import { colors, styles } from './styles.js';

const Body = styled.div`
  color: ${colors.standardTxtColor};
  display: flex;
  flex-direction: column;
  font-family: 'Comfortaa', monospace;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  background-color: ${colors.standardBGColor};
  color: rgb(127, 150, 240);
  font-weight: 700;
  padding: 10px 40px 10px 40px;
  position: sticky;
  text-shadow: -2px 2.5px 0 rgba(52, 250, 250, 0.6);
  top: 0;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Body>
        <Title>
          The Store?
        </Title>
        <Overview />
        <RatingsAndReviews />
        <RelatedItemsAndComparisons />
        <QuestionsAndAnswers />
      </Body>
    );
  }
}

export default App;
