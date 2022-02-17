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

import FiveStar from './FiveStar';

test('FiveStar can render', () => {
  const rating = 3.5;
  render(<FiveStar rating={rating} />);
  expect(screen.getByTestId('five-star')).toBeTruthy();
  expect(screen.getAllByTestId('full-star')).toBeTruthy();
  expect(() => {
    screen.getByTestId('3/4-star');
  }).toThrow();
  expect(screen.getByTestId('1/2-star')).toBeTruthy();
  expect(screen.getByTestId('empty-star')).toBeTruthy();
});
