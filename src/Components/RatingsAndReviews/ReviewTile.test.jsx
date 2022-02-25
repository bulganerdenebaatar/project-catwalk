// import dependencies
import React from 'react';

// // import API mocking utilities from Mock Service Worker
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';

// import react-testing methods
import {
  render,
  screen,
} from '@testing-library/react';

// // add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

import ReviewTile from './ReviewTile';

// Testing dummy data
const review = {
  review_id: 1135681,
  rating: 5,
  summary: 'OMG it works',
  recommend: true,
  response: null,
  body: "That's pretty dang cool that a review can be posted through this modal",
  date: '2022-02-19T00:00:00.000Z',
  reviewer_name: 'Richard',
  helpfulness: 1,
  photos: [],
};

const handleRefresh = () => {
  console.log('dummy function');
};

test('Review Tile can render', () => {
  const rating = 3.5;
  const { rerender } = render(<ReviewTile review={review} handleRefresh={handleRefresh} />);
  expect(screen.getByTestId('review-tile')).toBeTruthy();
});
