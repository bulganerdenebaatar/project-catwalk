import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { GlobalContext } from '../../App.jsx';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList() {
  const { averageRating, closestQuarter, numberOfRatings } = useContext(GlobalContext).ratingsData;
  const { productId } = useContext(GlobalContext);
  const [reviews, setReviews] = useState([]);
  const [displayNumber, setDisplayNumber] = useState(2);
  const [sort, setSort] = useState('relevant');

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
        setDisplayNumber(2);
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
    console.log('hi!');
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
        <select value={sort} onChange={handleChange}>
          <option value="relevant">relevant</option>
          <option value="helpful">helpful</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <hr />
      <div>
        {reviews.slice(0, displayNumber).map((review) => <ReviewTile handleRefresh={handleRefresh} review={review} />)}
      </div>
      <div>
        {displayNumber < reviews.length
        && <button type="button" onClick={updateDisplayNumber}>More Reviews</button>}
        <button type="button" onClick={updateDisplayNumber}>Add Review</button>
      </div>
    </div>
  );
}

export default ReviewsList;
