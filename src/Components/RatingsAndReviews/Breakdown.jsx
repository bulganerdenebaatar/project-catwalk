import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalContext } from '../../App.jsx';

const StarBar = styled.div`
  display: flex;
  flex-direction: column;
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
      <progress id="test" max="100" value={percent}>
        {percent}
        %
      </progress>
    </StarBar>
  );
}

RatingBar.propTypes = {
  stars: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Breakdown;
