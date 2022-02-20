import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalContext } from '../../App.jsx';

const StarBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreenGrayProgress = styled.progress`
  appearance: none;
  width: 100%;
  height 25px;
  margin-bottom: 10px;

  ::-webkit-progress-bar {
    background-color: rgba(149, 141, 153, 0.6);
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  ::-webkit-progress-value {
    background-color: rgba(112, 32, 150, 0.8);
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
`;

function Breakdown() {
  const { numberOfRatings, ratings } = useContext(GlobalContext).ratingsData;
  // Take in a ratings object and return five bars (one for each numerical rating)
  // Each bar shows proportinally (green) how many of the reviews had this value
  // const numberOfRatings = Object.values(ratings);
  // const total = numberOfRatings.reduce((p, c) => p + Number(c), 0);
  const percents = Object.values(ratings).map((rating) => ((Number(rating) * 100) / numberOfRatings).toString());

  return (
    <div className="breakdown">
      <RatingBar className="rating-bar" stars="1" number={ratings[1]} percent={percents[0]} />
      <RatingBar className="rating-bar" stars="2" number={ratings[2]} percent={percents[1]} />
      <RatingBar className="rating-bar" stars="3" number={ratings[3]} percent={percents[2]} />
      <RatingBar className="rating-bar" stars="4" number={ratings[4]} percent={percents[3]} />
      <RatingBar className="rating-bar" stars="5" number={ratings[5]} percent={percents[4]} />
    </div>
  );
}

function RatingBar({ stars, percent, number }) {
  return (
    <StarBar>
      <label htmlFor="test">
        {stars}
        {' '}
        Stars
        {' -- '}
        {number}
      </label>
      <GreenGrayProgress id="test" max="100" value={percent}>
        {percent}
        %
      </GreenGrayProgress>
    </StarBar>
  );
}

RatingBar.propTypes = {
  stars: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Breakdown;
