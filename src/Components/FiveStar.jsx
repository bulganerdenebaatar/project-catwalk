import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Star = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1em;
  color: #ddd;

  &:after {
    font-family: FontAwesome;
    content: "\f005";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    color: rgb(241,245,6);
    color: linear-gradient(90deg, rgba(241,245,6,1) 1%, rgba(203,215,246,0.9066220238095238) 97%);
  }
`;

const ThreeQuarterStar = styled(Star)`
  &:after {
    width: 75%;
  }
`;

const HalfStar = styled(Star)`
  &:after {
    width: 50%;
  }
`;

const QuarterStar = styled(Star)`
  &:after {
    width: 25%;
  }
`;

const EmptyStar = styled(Star)`
  &:after {
    width: 0%;
  }
`;

function FiveStar({ rating }) {
  // Take in a number (rating to nearest quarter) return five stars filled to the nearest 1/4 star
  let closestQuarter = rating;
  const stars = [];
  let key = 1;

  while (closestQuarter > 0) {
    if (closestQuarter >= 1) {
      stars.push(<Star key={key} data-postion={key} className="star fa fa-star" data-testid="full-star" />);
      closestQuarter -= 1;
    } else if (closestQuarter >= 0.75) {
      stars.push(<ThreeQuarterStar key={key} data-postion={key} className="star fa fa-star" data-testid="3/4-star" />);
      closestQuarter -= 0.75;
    } else if (closestQuarter >= 0.5) {
      stars.push(<HalfStar key={key} data-postion={key} className="star fa fa-star" data-testid="1/2-star" />);
      closestQuarter -= 0.5;
    } else {
      stars.push(<QuarterStar key={key} data-postion={key} className="star fa fa-star" data-testid="1/4-star" />);
      closestQuarter -= 0.25;
    }
    key += 1;
  }

  while (stars.length < 5) {
    stars.push(<EmptyStar key={key} data-position={key} className="star fa fa-star" data-testid="empty-star" />);
    key += 1;
  }

  return (
    <div data-analytics-id="five-stars" className="five-star" data-testid="five-star">
      {stars}
    </div>
  );
}

FiveStar.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default FiveStar;
