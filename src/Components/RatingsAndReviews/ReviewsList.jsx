import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Styled from 'styled-components';
import { GlobalContext } from '../../App.jsx';
import ReviewTile from './ReviewTile.jsx';
import ReviewModal from '../ReviewModal.jsx';

const ScrollDiv = Styled.div`
  min-height: 40vh;
  max-height: 40vh;
  overflow-y: scroll;
`;

function ReviewsList() {
  const { averageRating, closestQuarter, numberOfRatings } = useContext(GlobalContext).ratingsData;
  const { productId } = useContext(GlobalContext);
  const [reviews, setReviews] = useState([]);
  const [displayNumber, setDisplayNumber] = useState(2);
  const [sort, setSort] = useState('relevant');
  const [showModal, setShowModal] = useState(false);

  const updateDisplayNumber = () => {
    setDisplayNumber((previous) => previous + 2);
  };

  const dropdownSort = (option) => {
    axios({
      method: 'get',
      url: 'shopdata/reviews/',
      params: {
        count: 100,
        sort: option,
        product_id: productId,
      },
    })
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setSort(e.target.value);
    dropdownSort(e.target.value);
  };

  const handleRefresh = () => {
    dropdownSort(sort);
  };

  useEffect(() => {
    dropdownSort(sort);
  }, [productId]);

  return (
    <div>
      <div>
        {reviews.length}
        {' '}
        reviews sorted by
        {' '}
        <select value={sort} onChange={handleChange}>
          <option value="relevant">relevant</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </select>
        <hr />
      </div>
      {reviews.length > 0
      && (
      <ScrollDiv>
        {reviews.slice(0, displayNumber).map((review) => <ReviewTile handleRefresh={handleRefresh} review={review} />)}
      </ScrollDiv>
      )}
      <div>
        <hr />
        {displayNumber < reviews.length
        && <button type="button" onClick={updateDisplayNumber}>More Reviews</button>}
        <button type="button" onClick={() => setShowModal(true)}>Add Review</button>
        {showModal && <ReviewModal id={productId} onDismiss={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default ReviewsList;
