/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import FiveStar from '../FiveStar.jsx';
import { dateFormatter } from '../../util/util.js';
import { Helpful, Report } from '../HelpfulOrReport.jsx';

const SpacedBody = Styled.div`
  overflow-wrap: anywhere;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const StyledReview = Styled.div`
  padding: 10px 10px 10px 10px;
  margin: 12px 5px 12px 5px;
  border: black;
  background-color: rgba(220, 152, 245, 0.3);
  box-shadow: 0px 0px 5px grey;
`;
const TopBar = Styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Opacity = Styled.div`
  opacity: 0.6;
`;
const Summary = Styled.div`
  font-size: 150%;
  font-weight: 700;
`;

function ReviewTile({ review, handleRefresh }) {
  const {
    review_id, rating, summary, recommend, response, body, date, helpfulness, photos, reviewer_name,
  } = review;

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <StyledReview data-analytics-id={review.review_id} data-testid="review-tile">
      <TopBar data-testid="top-bar">
        <FiveStar rating={rating} />
        <Opacity>
          {reviewer_name}&nbsp;{dateFormatter(date)}
        </Opacity>
      </TopBar>
      <Summary>{summary}</Summary>
      <SpacedBody>{body}</SpacedBody>
      {response && <SpacedBody>Response from seller:&nbsp;{response}</SpacedBody>}
      {recommend && <SpacedBody>{'\u2713'}&nbsp;I recommend this product</SpacedBody>}
      <div>{response}</div>
      <Opacity className="bottom-bar">
        Helpful?&nbsp;
        <Helpful path="reviews" id={review_id} handleRefresh={handleRefresh} />
        ({helpfulness})&nbsp;&#124;
        <Report path="reviews" id={review_id} handleRefresh={handleRefresh} />
      </Opacity>
    </StyledReview>
  );
}

ReviewTile.propTypes = {
  handleRefresh: PropTypes.func.isRequired,
  review: PropTypes.shape({
    review_id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    recommend: PropTypes.bool.isRequired,
    response: PropTypes.string,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })).isRequired,
  }).isRequired,
};

FiveStar.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewTile;
