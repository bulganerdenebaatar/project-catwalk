/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FiveStar from '../FiveStar.jsx';
import { dateFormatter } from '../../util/util.js';
import { Helpful, Report } from '../HelpfulOrReport.jsx';

function ReviewTile({ review, handleRefresh }) {
  const {
    review_id, rating, summary, response, body, date, helpfulness, photos, reviewer_name,
  } = review;

  return (
    <div>
      <div className="top-bar">
        <FiveStar rating={rating} />
        <div>
          {reviewer_name}
          {' '}
          {dateFormatter(date)}
        </div>
      </div>
      <h3>{summary}</h3>
      <div>{body}</div>
      <div>{response}</div>
      <div className="bottom-bar">
        Helpful?
        {' '}
        <Helpful path="reviews" id={review_id} handleRefresh={handleRefresh} />
        ({helpfulness})
        {' | '}
        <Report path="reviews" id={review_id} handleRefresh={handleRefresh} />
      </div>
      <hr />
    </div>
  );
}

ReviewTile.propTypes = {
  handleRefresh: PropTypes.func.isRequired,
  review: PropTypes.shape({
    review_id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
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

export default ReviewTile;

FiveStar.propTypes = {
  rating: PropTypes.number.isRequired,
};
