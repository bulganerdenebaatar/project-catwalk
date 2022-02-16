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

import RelatedProductCards from './RelatedProductCards.jsx';

test('ProductCards can render', () => {
  render(<RelatedProductCards />);
  expect(screen.getByTestId('productCard')).toBeTruthy();
});
