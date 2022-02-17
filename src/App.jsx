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

export const GlobalContext = createContext(0);

function App() {

  // State
  const [ratings, setRatings] = useState({
    averageRating: 0,
    closestQuarter: 0,
    numberOfRatings: 0,
  });

  const [productId, setProductId] = useState(40345);

  useEffect(() => {
    axios.get(`shopdata/reviews/meta/?product_id=${productId}`)
      .then((res) => {
        console.log('res.data', res.data);
        const entries = Object.entries(res.data.ratings);
        const ratingsTotal = entries.reduce(((p, c) => p + Number(c[0]) * Number(c[1])), 0);
        const numberOfRatings = entries.reduce(((p, c) => p + Number(c[1])), 0);
        const averageRating = (Math.round((ratingsTotal / numberOfRatings) * 10) / 10);
        const closestQuarter = (Math.round(averageRating * 4) / 4);
        setRatings({ averageRating, closestQuarter, numberOfRatings });
      })
      .catch((err) => (
        console.log('hi', err)
      ));
  }, [productId]);

  return (
    <GlobalContext.Provider value={{ ratings, productId, setProductId }}>
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
