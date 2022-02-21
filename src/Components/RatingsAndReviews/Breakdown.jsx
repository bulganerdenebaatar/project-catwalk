/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalContext } from '../../App.jsx';
import { ReviewContext } from './index.jsx';

const StarBar = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 80%;
`;
const GreenGrayProgress = styled.progress`
  appearance: none;
  width: 100%;
  height 15px;
  margin-bottom: 10px;

  ::-webkit-progress-bar {
    background-color: rgba(149, 141, 153, 0.6);
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  ::-webkit-progress-value {
    background-color: rgba(112, 32, 150, 0.8);
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
`;
const Clickable = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;


function Breakdown() {
  const { numberOfRatings, ratings } = useContext(GlobalContext).ratingsData;
  const { starFilter, setStarFilter } = useContext(ReviewContext);
  // Take in a ratings object and return five bars (one for each numerical rating)
  // Each bar shows proportinally (green) how many of the reviews had this value
  // const numberOfRatings = Object.values(ratings);
  // const total = numberOfRatings.reduce((p, c) => p + Number(c), 0);
  const percents = Object.values(ratings).map((rating) => ((Number(rating) * 100) / numberOfRatings).toString());
  const filterBy = (star) => {
    console.log('filter click');
    setStarFilter((p) => (
      !p.includes(star) ? [...p, star] : p.filter((item) => item !== star)
    ));
  };
  const starValues = [1, 2, 3, 4, 5];

  return (
    <div className="breakdown">
      {
        starValues.map((value) => (
          <RatingBar
            className="rating-bar"
            stars={value.toString()}
            number={ratings[value]}
            percent={percents[value - 1]}
            onClick={() => filterBy(value)}
            active={starFilter.includes(value)}
          />
        ))
      }
    </div>
  );
}

function RatingBar({
  stars,
  percent,
  number,
  onClick,
  active,
}) {
  return (
    <StarBar>
      <Clickable onClick={onClick}>
        {stars}
        {' '}
        Stars
        {'  -  '}
        {number}
        {' '}
        {active && '🟣'}
      </Clickable>
      <GreenGrayProgress max="100" value={percent}>
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
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Breakdown;
