/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import FiveStar from '../FiveStar.jsx';
import { dateFormatter } from '../../util/util.js';
import { Helpful, Report } from '../HelpfulOrReport.jsx';

const SpacedBody = Styled.div`
  overflow-wrap: anywhere;
  padding-bottom: 20px;
`;
const StyledReview = Styled.div`
  padding: 0px 10px 0px 10px;
  margin: 10px 0px 10px 0px;
  border: black;
  background-color: rgba(220, 152, 245, 0.3);
`;
const TopBar = Styled.div`
  display: flex;
  justify-content: space-between;
`;
const Opacity = Styled.div`
  opacity: 0.6;
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
      <h3>{summary}</h3>
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
