/* eslint-disable import/no-cycle */
import React, {
  useState, useEffect, useContext, createContext, useMemo,
} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import Overview from './Components/Overview/index.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';
import QuestionsAndAnswers from './Components/QuestionsAndAnswers/index.jsx';
import RelatedItemsAndComparisons from './Components/RelatedItemsAndComparisons/index.jsx';
import { colors, styles } from './styles.js';
import { ratingsCalculator } from './util/util.js';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${colors.standardBGColor};
  color: ${colors.standardTxtColor};
  display: flex;
  flex-direction: column;
  font-family: 'Comfortaa', monospace;
  position: relative;
  button {
    background-color: rgba(255, 240, 240);
    border: thin solid teal;
    border-radius: 15px;
    font-family: inherit;
    margin: 5px;
    padding: 5px;

    :hover{
      background-color: rgb(255, 255, 255);
      border-color: gold;
      cursor: pointer;
    }
    :active {
      background-color: rgba(200, 255, 255, 0.9);
    }
  }
  select {
    border: thin solid teal;
    border-radius: 10px;
    background-color: rgba(255, 240, 240);
    font-family: inherit;
    :hover {
      background-color: rgb(255, 255, 255);
      border-color: gold;
      cursor: pointer;
    }
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
z-index: 10;
`;

export const GlobalContext = createContext(0);

function App() {

  // State
  const [ratingsData, setRatingsData] = useState({
    ratings: {},
    averageRating: 0,
    closestQuarter: 0,
    numberOfRatings: 0,
    characteristics: {},
    recommended: {},
  });

  const [productId, setProductId] = useState(40344);

  useEffect(() => {
    axios.get(`shopdata/reviews/meta/?product_id=${productId}`)
      .then((res) => {
        const { characteristics, recommended, ratings } = res.data;
        const { closestQuarter, averageRating, numberOfRatings } = ratingsCalculator(res.data.ratings);
        setRatingsData({
          ratings,
          averageRating,
          closestQuarter,
          numberOfRatings,
          characteristics,
          recommended,
        });
      })
      .catch((err) => (
        console.log(err)
      ));

  }, [productId]);

  return (
    <GlobalContext.Provider value={{
      ratingsData,
      productId,
      setProductId,
    }}
    >
      <GlobalStyle />
      <Title>
        The Store?
      </Title>
      <Overview />
      <RatingsAndReviews />
      <RelatedItemsAndComparisons />
      <QuestionsAndAnswers />
    </GlobalContext.Provider>
  );
}

export default App;
