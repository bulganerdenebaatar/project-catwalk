import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Star = styled.span`
  display: inline-block;
  position: relative;
  font-size: 100px;
  color: #ddd;

  &:after {
    font-family: FontAwesome;
    content: "\f005";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    color: #f80;
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

function FiveStar({ ratings }) {
  // Take in ratings object and return five stars filled to the nearest 1/4 star
  const entries = Object.entries(ratings);
  const ratingsTotal = entries.reduce(((p, c) => p + Number(c[0]) * Number(c[1])), 0);
  const numberOfRatings = entries.reduce(((p, c) => p + Number(c[1])), 0);
  const average = Math.round((ratingsTotal / numberOfRatings) * 10) / 10;
  let closestQuarter = Math.round(average * 4) / 4;
  const stars = [];

  while (closestQuarter > 0) {
    if (closestQuarter >= 1) {
      stars.push(<Star className="star fa fa-star" data-testid="full-star" />);
      closestQuarter -= 1;
    } else if (closestQuarter >= 0.75) {
      stars.push(<ThreeQuarterStar className="star fa fa-star" data-testid="3/4-star" />);
      closestQuarter -= 0.75;
    } else if (closestQuarter >= 0.5) {
      stars.push(<HalfStar className="star fa fa-star" data-testid="1/2-star" />);
      closestQuarter -= 0.5;
    } else {
      stars.push(<QuarterStar className="star fa fa-star" data-testid="1/4-star" />);
      closestQuarter -= 0.25;
    }
  }

  while (stars.length < 5) {
    stars.push(<EmptyStar className="star fa fa-star" data-testid="empty-star" />);
  }

  return (
    <div className="five-star" data-testid="five-star">
      {stars}
    </div>
  );
}

FiveStar.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }).isRequired,
};

export default FiveStar;

// Example
// "ratings": {
//   "1": "1",
//   "2": "2",
//   "3": "2",
//   "4": "2",
//   "5": "21"
// }

// Have an empty, 1/4, 1/2, 3/4, and full star drawn (assets folder?)
// Use modulo and length to figure out what to draw
// ex 3.8 --> - 1, - 1, -1, -1 (fails) to get 3 full stars
// -0.75, -0.75 (fails) to get one 3/4 star
// -0.5 (fails)
// -0.25 (fails)
// currently have 4 stars fill in missing (difference from 5) star with a blank

// Ways to get around recalculation using hooks -- useEffect? useMemo?
// Want to only render on information change
// To round to nearest quarter Math.round(num * 4) / 4
