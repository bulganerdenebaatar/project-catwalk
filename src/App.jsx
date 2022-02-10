import React from 'react';
import styled from 'styled-components';
import Overview from './Components/Overview/index.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/index.jsx';
import RelatedItemsAndComparisons from './Components/RelatedItemsAndComparisons/index.jsx';

const Body = styled.body`
  background-color: rgba(163, 64, 83, 64);
  color: rgba(127, 150, 240, 94);
  display: flex;
  flex-direction: column;
  font-family: 'Comfortaa', monospace;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  background-color: inherit;
  color: rgba(127, 150, 240, 94);
  font-weight: 700;
  padding: 10px 40px 10px 40px;
  position: sticky;
  text-shadow: -2px 3px 0 rgba(52, 168, 152, 66);
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
          The Store
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
